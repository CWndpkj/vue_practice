import Mock from 'mockjs'
function getPermissionContent(options) {
  console.log(options)
  const { username, password } = JSON.parse(options.body)
  if (username == 'admin' && password == 'admin') {
    return {
      statusCode: 200,
      msg: 'success',
      data: {
        menuList: [
          {
            path: "/home",
            label: "首页",
            icon: 'location',
          },
          {
            path: "/good",
            label: "商品",
            icon: 'food',
          },
          {
            path: "/user",
            label: "用户",
            icon: 'user',
          },
          {
            path: "/other",
            label: "其他",
            icon: 'location',
            chrildren: [
              {
                path: "/other1",
                label: "其他1",
                icon: "location",
              },
              {
                path: "/other2",
                label: "其他2",
                icon: "location",
              }
            ]
          }
        ],
        token: Mock.Random.guid()
      },
    }
  } else if (username == "pkj" && password == "pkj") {
    return {
      statusCode: 200,
      msg: 'success',
      data: {
        menuList: [
          {
            path: "/home",
            label: "首页",
            icon: 'location',
          },
          {
            path: "/good",
            label: "商品",
            icon: 'food',
          },
          {
            path: "/other",
            label: "其他",
            icon: 'location',
            chrildren: [
              {
                path: "/other1",
                label: "其他1",
                icon: "location",
              },
              {
                path: "/other2",
                label: "其他2",
                icon: "location",
              }
            ]
          }
        ],
        token: Mock.Random.guid()
      }
    }
  } else {
    return {
      statusCode: 401,
      msg: '用户名或密码错误'
    }
  }
}


export {
  getPermissionContent
}
