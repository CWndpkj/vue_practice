import Mock from 'mockjs'
import { getTableContent } from './MockData/mockData'
Mock.mock('/api/getTableContent', 'get', getTableContent())
