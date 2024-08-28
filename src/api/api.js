import request from "./request";

function getTableContent() {
  return request({
    method: 'get',
    url: '/home/getTableContent'
  })
}

function getGoodsContent() {
  return request({
    method: 'get',
    url: '/home/getGoodsContent'
  })
}

function getUserContent(options) {
  return request({
    method: 'get',
    url: '/user/getUserContent',
    data: options
  })
}
function deleteUser(config) {
  return request({
    method: 'get',
    url: '/user/deleteUser',
    data: config
  })
}
function newUser(config) {
  return request({
    method: 'post',
    url: '/user/newUser',
    data: config
  })
}
function updateUser(config) {
  return request({
    method: 'post',
    url: '/user/updateUser',
    data: config
  })
}

function getPermissionContent(user) {
  return request({
    method: 'post',
    url: '/permission/getPermissionContent',
    data: user
  })
}

const api = {
  getTableContent, getGoodsContent, getUserContent, deleteUser, newUser, updateUser,getPermissionContent
}

export default api
