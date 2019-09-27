import axios from 'axios'
let axiosPlugin = {}
axiosPlugin.install = (Vue, options) => {
  const service = axios.create(options)
  Vue.prototype.$axios = service
  Vue.prototype.$http = {
    get: (url, data, options) => {
      let axiosOpt = {
        ...options,
        ...{
          method: 'get',
          url,
          params: data
        }
      }
      return service(axiosOpt)
    },
    post: (url, data, options) => {
      let axiosOpt = {
        ...options,
        ...{
          method: 'post',
          url,
          data: data
        }
      }
      return service(axiosOpt)
    }
  }
}
export default axiosPlugin
