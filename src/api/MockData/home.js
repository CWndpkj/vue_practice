const getTableContent = () => {
  return {
    statusCode: 200,
    msg: 'success',
    data: {
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买',
      },
      tableData: [
        {
          name: 'Vue3.0',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'React17.0',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'Angular12.0',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'TypeScript',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'JavaScript',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'HTML5',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'CSS3',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'Node.js',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'Webpack',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'Babel',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'ESLint',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'Prettier',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'Git',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'GitHub',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'VSCode',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        },
        {
          name: 'Sublime Text',
          todayBuy: 0,
          monthBuy: 0,
          totalBuy: 0
        }
      ]
    }
  }
}

const getGoodsContent = () => {
  return {
    statusCode: 200,
    msg: 'success',
    data: {
      tableLabel: {
        name: '统计',
        value: '数量',
        icon: '图标',
        color: '颜色'
      },
      tableData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'SuccessFilled',
          color: '#2ec7c9',
        },
        {
          name: '今日收藏订单量',
          value: '210',
          icon: 'StarFilled',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单量',
          value: 1234,
          icon: 'GoodsFilled',
          color: '#5ab1ef'
        },
        {
          name: '月支付订单',
          value: 1234,
          icon: 'SuccessFilled',
          color: '#2ec7c9',
        },
        {
          name: '月收藏订单量',
          value: '210',
          icon: 'StarFilled',
          color: '#ffb980'
        },
        {
          name: '月未支付订单量',
          value: 1234,
          icon: 'GoodsFilled',
          color: '#5ab1ef'
        }
      ]
    }
  }
}
export {
  getTableContent, getGoodsContent
}
