import axios from 'axios'

const instance = axios.create({
  timeout: 10000,
  baseURL: `http://localhost:3000/${process.env.VUE_APP_CURRENTMODE}`
})

/* 统一设置post请求头 */
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/* 添加请求拦截器 */
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

/* 添加响应拦截器 */
instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error)
    } else {
      return Promise.reject(new Error('请求超时, 请刷新重试'))
    }
  }
)

/* 封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params: {
        ...params,
        // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
        timeStamp: Date.now()
      },
      ...config
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/* 封装post请求 */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
