import Mock from 'mockjs'
import { getTableContent, getGoodsContent } from './MockData/home'
import { getUserContent, deleteUser, newUser, updateUser } from './MockData/user'
import { getPermissionContent } from './MockData/permission'
Mock.mock('/api/mock/home/getTableContent', 'get', getTableContent())
Mock.mock('/api/mock/home/getGoodsContent', 'get', getGoodsContent())
Mock.mock(/api\/mock\/user\/getUserContent/, 'get', (options) => getUserContent(options))
Mock.mock(/api\/mock\/user\/deleteUser/, 'get', (options) => deleteUser(options))
Mock.mock(/api\/mock\/user\/newUser/, 'post', (options) => newUser(options))
Mock.mock(/api\/mock\/user\/updateUser/, 'post', (options) => updateUser(options))
Mock.mock(/api\/mock\/permission\/getPermissionContent/, 'post', (options) => getPermissionContent(options))
