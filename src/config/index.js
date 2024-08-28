const env = import.meta.env.MODE || 'prod'

const envConfig = {
  development: {
    baseApi: '/api',
    mockApi: '/api/mock'
  },
  test: {
    baseApi: '//test.pkjinfinity.com/api',
    mockApi: ''
  },
  prod: {
    baseApi: '//pkjifinity.com/api',
    mockApi: ''
  }
}

export default {
  env,
  ...envConfig[env],
  isMock:true
}
