<template>
  <div class="tool-bar">
    <el-button @click="handleUserAdd">
      <el-icon>
        <Plus />
      </el-icon>
    </el-button>
    <span class="search-form">
      <el-input v-model="store.form.search.name" placeholder="请输入用户名" clearable></el-input>
      <el-button type="primary" @click=handleSearch>搜索</el-button>
    </span>
  </div>
  <div class="user-list">
    <el-table :data="store.userList.data" style="width: 100%">
      <el-table-column v-for="(val, key) in store.userList.label" :prop="key" :key="key" :label="val" />
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #=scope>
          <el-button link type="primary" size="small" @click="handleEdit(scope.row)">
            Edit
          </el-button>
          <el-button link type="danger" size="small" @click="handleDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-block">
      <el-pagination layout="prev, pager, next" :total="store.userList.len"
        v-model:current-page="store.fetchConfig.currentPage" />
    </div>
  </div>
  <el-dialog v-model="store.dialog.visible" :title="store.dialog.state == 'new' ? '新增用户' : '编辑用户'"
    :before-close="handleCancle" class="dialog" width="60%">
    <el-form :inline="true" :model="store.form.user" ref="userForm" :rules="rules" status-icon>
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="姓名" v-model="store.form.user.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别" prop="sex">
            <el-select v-model="store.form.user.sex" :placeholder="store.form.user.sex" class="select">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="生日" prop="birthday">
            <el-date-picker v-model="store.form.user.birthday" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="地址" prop="address">
            <el-input placeholder="地址" v-model="store.form.user.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancle">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { watch } from 'vue';
import { reactive, onMounted, getCurrentInstance } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import { nextTick } from 'vue';

const { proxy } = getCurrentInstance()

const store = reactive({
  fetchConfig: {
    currentPage: 1,
    pageSize: 10,
    filterKeyWord: ''
  },
  userList: {
    len: 0,
    data: [],
    label: {}
  },
  dialog: {
    visible: false,
    state: 'new'
  },
  form: {
    user: {
      // id:'',
      name: '',
      sex: '男',
      birthday: '',
      address: '',
    },
    search: {
      name: ''
    }
  },
})

const fetchUserList = async (options) => {
  const res = await proxy.$api.getUserContent(options)
  store.userList.data = res.data.tableData
  store.userList.label = res.data.tableLabel
  store.userList.len = res.data.tableLen
}

onMounted(() => {
  fetchUserList(store.fetchConfig)
})
const handleEdit = (row) => {
  store.dialog.state = 'edit'
  store.dialog.visible = true
  nextTick(() => {
    Object.assign(store.form.user, row)
  })
}
const handleCancle = () => {
  ElMessage({
    type: 'info',
    message: '已取消操作'
  })
  proxy.$refs.userForm.resetFields()
  store.dialog.visible = false
}

const rules = reactive({
  name: [
    { type: 'string', required: true, message: 'Please input name', trigger: 'blur' },
    { min: 2, max: 4, message: 'Length should be 2 to 4', trigger: 'blur' },
  ],
  birthday: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  address: [
    { required: true, message: 'Please input an address', trigger: 'blur' },
  ],
})

const handleConfirm = () => {
  proxy.$refs.userForm.validate((valid) => {
    if (valid) {
      store.dialog.visible = false
      let user = store.form.user
      if (typeof store.form.user.birthday != 'string') {
        const [year, month, day] = store.form.user.birthday.toLocaleDateString('en-CA').split('-');
        user = { ...store.form.user, birthday: `${year}-${month}-${day}` }
      }
      if (store.dialog.state === 'edit') {
        proxy.$api.updateUser(user).then(res => {
          if (res.statusCode === 200) {
            ElMessage({
              type: 'success',
              message: res.msg
            })
          } else {
            ElMessage({
              type: 'error',
              message: res.msg
            })
          }
        })
      }
      else if (store.dialog.state === 'new') {
        proxy.$api.newUser(user).then(res => {
          if (res.statusCode === 200) {
            ElMessage({
              type: 'success',
              message: res.msg
            })
          } else {
            ElMessage({
              type: 'error',
              message: res.msg
            })
          }
          fetchUserList(store.fetchConfig)
        })
      }
      proxy.$refs.userForm.resetFields()
      fetchUserList(store.fetchConfig)
    }
    else {
      ElMessage({
        type: 'error',
        message: '请检查输入'
      })
    }
  })
}
const handleUserAdd = () => {
  store.dialog.state = 'new'
  store.dialog.visible = true
}
const handleDelete = (row) => {
  ElMessageBox.confirm(
    '确定删除该用户吗？',
    '提示',
    {
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }
  ).then(async () => {
    const res = await proxy.$api.deleteUser({ id: row.id })
    if (res.statusCode === 200) {
      ElMessage({
        type: 'success',
        message: res.msg
      })
    } else {
      ElMessage({
        type: 'error',
        message: res.msg
      })
    }
    fetchUserList(store.fetchConfig)
  })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除'
      })
    })
}
const handleSearch = () => {
  store.fetchConfig.filterKeyWord = store.form.search.name
  fetchUserList(store.fetchConfig)
}
watch(() => store.fetchConfig.currentPage, () =>
  fetchUserList(store.fetchConfig)
)
</script>

<style lang="scss" scoped>
.tool-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-form {
  display: flex;
  justify-content: space-between;
  max-width: 500px;
}

.select {
  width: 60px;
}
</style>
