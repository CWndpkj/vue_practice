import axios from 'axios';
const DEFAULT_ERR_MSG = '请求失败，请稍后再试';
const instance = axios.create({
  baseURL: 'http://localhost:5143/api'
})

instance.interceptors.response.use((res) => {
  const { status, data, msg } = res;
  if (status === 200) {
    return data
  } else {
    return Promise.reject(msg || DEFAULT_ERR_MSG)
  }
})
