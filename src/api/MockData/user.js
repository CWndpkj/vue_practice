import Mock from "mockjs";
import { param2Obj } from "../utils";
const generateRandomData = () => {
  const tableLen = 300
  let tableData = [];
  for (let i = 0; i < tableLen; i++) {
    tableData.push(
      Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        sex: Mock.Random.integer(0, 1) === 0 ? '男' : '女',
        birthday: Mock.Random.date(),
        address: Mock.mock('@county(true)'),
      }))
  }
  return tableData
}

let tableDataSource = generateRandomData()

const deleteUser = (config) => {
  const { id } = param2Obj(config.url)
  if (!id) {
    return {
      statusCode: 401,
      msg: 'id不能为空'
    }
  }
  tableDataSource = tableDataSource.filter(user => user.id !== id)
  return {
    statusCode: 200,
    msg: '删除成功'
  }
}

const newUser = (config) => {
  const { name, sex, birthday, address } = JSON.parse(config.body)
  if (name === undefined || sex === undefined || birthday === undefined || address === undefined) {
    return {
      statusCode: 401,
      msg: '参数不能为空'
    }
  } else {
    const user = { name, sex, birthday, address }
    tableDataSource.unshift({
      id: Mock.Random.guid(),
      ...user
    })
    return {
      statusCode: 200,
      msg: '添加成功'
    }
  }
}

const updateUser = (config) => {
  const { name, sex, birthday, address, id } = JSON.parse(config.body)
  if (id === undefined || name === undefined || sex === undefined || birthday === undefined || address === undefined) {
    return {
      statusCode: 401,
      msg: '参数不能为空'
    }
  } else {
    const userFind = tableDataSource.find(user => user.id == id)
    if (userFind) {
      userFind.name = name
      userFind.sex = sex
      userFind.birthday = birthday
      userFind.address = address
      console.log(name, sex, birthday, address, id)
      console.log(userFind)
      return {
        statusCode: 200,
        msg: '修改成功'
      }
    } else {
      return {
        statusCode: 401,
        msg: '用户不存在'
      }
    }
  }

}

const getUserContent = (opts) => {
  const {
    currentPage = 1,
    pageSize = 10,
    filterKeyWord = ''
  } = param2Obj(opts.url)
  let tableData = tableDataSource.filter(user => {
    if (filterKeyWord && user.name.indexOf(filterKeyWord) === -1)
      return false
    return true
  })
  const tableLen = tableData.length
  tableData = tableData.filter((_, index) =>
    index >= (currentPage - 1) * pageSize && index < currentPage * pageSize
  )
  return {
    statusCode: 200,
    msg: 'success',
    data: {
      tableLabel: {
        id: 'id',
        name: '姓名',
        sex: '性别',
        birthday: '生日',
        address: '地址',
      },
      tableData: tableData,
      tableLen: tableLen
    }
  }
}

export {
  getUserContent, deleteUser, newUser, updateUser
}
