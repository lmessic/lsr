import axios from 'axios'
import md5 from 'md5'

// 请求头
axios.defaults.headers['Authorization'] = 'xxx'
// 设置接口超时时间
axios.defaults.timeout = 20000
// 请求根路径
axios.defaults.baseURL = '/api'
// 跨域时，是否携带用户凭证
axios.defaults.withCredentials = true


// 请求节流限制
const getRequestKey = (config) => {
  if (!config) {
    // 如果没有获取到请求的相关配置，根据时间戳生成
    return md5(+ new Date())
  }
  const data = typeof config.data === 'string' ? config.data : JSON.stringify(config.data)
  return md5(`${config.url}&${config.method}&${data}`)
}

// 储存key值
const pending = {}
// 检查key值
const checkPending = (key) => !!pending[key]
// 删除key值
const removePending = (key) => {
  delete pending[key]
}

const CancelToken = axios.CancelToken

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  console.log('请求拦截', config)
  // 计算当前请求key
  const key = getRequestKey(config)

  if (checkPending(key)) {
    // 重复请求则取消当前请求
    const source = CancelToken.source()
    config.cancelToken = source.token
    source.cancel('重复请求')
  } else {
    // 加入请求队列
    pending[key] = true
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('响应拦截', response)
  // 请求完成，删除请求中状态
  const key = getRequestKey(response.config)
  removePending(key)

  return response
}, function (error) {
  return Promise.reject(error)
})

/**
 * get
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function get(url, params = {}, config = {}) {
  return axios.get(url, {
    params,
    ...config,
  })
}

/**
 * post
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function post(url, params, config = {}) {
  return axios.post({
    url,
    method: 'post',
    data: params,
    ...config,
  })
}
export default axios