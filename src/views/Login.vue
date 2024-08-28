<template>
  <div class="common-container">
    <el-card class="form-container">
      <h1>欢迎登录</h1>
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="请输入密码" v-model="user.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width: 100%;" @click="handleClick">登录</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useAllDataStore } from '../stores';
import { ElMessage } from 'element-plus';
const user = reactive({
  username: '',
  password: ''
})
const store = useAllDataStore()
const { proxy } = getCurrentInstance()
const router = useRouter()
const handleClick = () => {
  const res = proxy.$api.getPermissionContent(user)
    .then(res => {
      console.log(res)
      store.setMenuList(res.data.menuList)
      store.setToken(res.data.token)
      router.push('/home')
    }).catch(err => {
      console.log(err)
    })
}
</script>

<style lang="scss" scoped>
.common-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  width: 500px;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
