import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: '请求成功',
        type: 'success',
        data: {
          name: 'vben',
          mobile: 18570476463
        }
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response(opt: any) {
      const { username, password } = JSON.parse(JSON.stringify(opt.body))
      if (username == 'admin' && password == 123) {
        return {
          code: 0,
          msg: '登陆成功',
          type: 'success',
          data: {
            token: 'helloCZM'
          }
        }
      } else {
        return {
          code: 1,
          type: 'error',
          msg: '账号密码错误'
        }
      }
    }
  }
] as MockMethod[]
