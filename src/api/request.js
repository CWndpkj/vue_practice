import axios from 'axios';
import config from '../config';
import { ElMessage } from 'element-plus'
const DEFAULT_ERR_MSG = '请求失败，请稍后再试';
const instance = axios.create()

instance.interceptors.response.use((res) => {
  if (res.status !== 200) {
    ElMessage.error(DEFAULT_ERR_MSG)
    return Promise.reject(DEFAULT_ERR_MSG)
  }
  const { statusCode, data, msg } = res.data;
  if (statusCode === 200) {
    return { statusCode, data, msg }
  } else {
    ElMessage.error(msg || DEFAULT_ERR_MSG)
    return Promise.reject(msg || DEFAULT_ERR_MSG)
  }
})

function request(opts) {
  opts.method = opts.method || 'get'
  // get请求参数调整
  if (opts.method.toLowerCase() === 'get') {
    opts.params = opts.data
  }

  //处理isMock,otps中的优先级更高
  let isMock = config.isMock
  if (typeof opts.isMock !== 'undefined') {
    isMock = opts.isMock
  }

  //处理当前环境
  if (config.env === 'prod') {
    instance.defaults.baseURL = config.baseURL
  } else {
    instance.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }
  return instance(opts)
}

export default request
