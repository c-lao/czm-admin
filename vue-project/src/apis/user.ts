import http from '@/plugins/axios'
interface UserInfo {
  name: string
  mobile: number
}
const userInfo = () => {
  return http.request<UserInfo>({
    url: '/info',
    method: 'get'
  })
}
interface responseLogin {}
const login = (data: responseLogin) => {
  return http.request({
    url: '/login',
    data,
    method: 'post'
  })
}
export { userInfo, login }
