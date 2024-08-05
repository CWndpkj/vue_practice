import { reactive } from "vue";

export const getTableContent = () => reactive({
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
    }
  ]
})
