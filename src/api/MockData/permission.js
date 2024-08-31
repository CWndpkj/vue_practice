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
            name: "home",//路由动态配置时需要使用到
            label: "首页",
            icon: 'location',
            url: "Home"
          },
          {
            path: "/good",
            name: "good",
            label: "商品",
            icon: 'food',
            url: "Good"
          },
          {
            path: "/user",
            name: "user",
            label: "用户",
            icon: 'user',
            url: "User"
          },
          {
            path: "/other",
            name: "other",
            label: "其他",
            icon: 'location',
            children: [
              {
                path: "/other1",
                name: "other1",
                label: "其他1",
                icon: "location",
                url: "Other1",
                children: [
                  {
                    path: "/other1-1",
                    name: "other1-1",
                    label: "其他1-1",
                    icon: "location",
                    url: "Other1-1"
                  },
                  {
                    path: "/other1-2",
                    name: "other1-2",
                    label: "其他1-2",
                    icon: "location",
                    url: "Other1-2"
                  }
                ]
              },
              {
                path: "/other2",
                name: "other2",
                label: "其他2",
                icon: "location",
                url: "Other2"
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
            name: "home",
            name: "home",
            label: "首页",
            icon: 'location',
            url: "Home"
          },
          {
            path: "/good",
            name: "good",
            label: "商品",
            icon: 'food',
            url: "Good"
          },
          {
            path: "/other",
            label: "其他",
            icon: 'location',
            children: [
              {
                path: "/other1",
                name: 'ohter1',
                label: "其他1",
                icon: "location",
                url: "Other1",
                children: [
                  {
                    path: "/other1",
                    name: 'ohter1',
                    label: "其他1",
                    icon: "location",
                    url: "Other1"
                  },
                  {
                    path: "/other2",
                    label: "其他2",
                    icon: "location",
                    url: "Other2"
                  }
                ]
              },
              {
                path: "/other2",
                label: "其他2",
                icon: "location",
                url: "Other2"
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
