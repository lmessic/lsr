import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const service = axios.create()

// 添加请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log('请求拦截', config)

  return config
}, (error: any) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {

  console.log('响应拦截', response)

  return response
}, (error: any) => {
  return Promise.reject(error)
})

export default service