<template>
  <el-row :gutter='50'>
    <el-col :span='10'>
      <el-card class="user-card" shadow='hover'>
        <div class="user-info">
          <img class='user-avator' src="../assets/vue.svg" alt="user">
          <span>
            <p>Admin</p>
            <p>管理员</p>
          </span>
        </div>
        <div class="login-info">
          <p>last login time:</p>
          <p>last login location:</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter='50'>
    <el-col :span='10'>
      <el-card class="table-card" shadow='hover'>
        <el-table :data='tableData' stripe :height='380'>
          <el-table-column v-for="(val, key) in tableLabel.value" :key='key' :prop='key' :label='val'></el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

const tableData = ref([])
const tableLabel = reactive({})
axios({
  method: 'get',
  url: '/api/getTableContent',
}).then((res) => {
  tableData.value = res.data.tableData
  tableLabel.value = res.data.tableLabel
}).catch((err) => {
  console.log(err);
});
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
  content-align: center;
  align-items: center;

  .user-avator {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}

.user-card {
  width: 500px;
  height: 300px;
}

.table-card {
  width: 500px;
  height: 400px;
}

.table-card {
  margin-top: 20px;
}
</style>
