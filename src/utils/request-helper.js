import {IP, PORT} from '@/amaConfig/server'
let baseUrl = [IP, PORT].join(':')
export default function (contxt) {
  return {
    async get (path, data) {
      let result = await contxt.$http.get(baseUrl + path, data)
      return result
    },
    async post (path, data) {
      let result = await contxt.$http.post(baseUrl + path, data)
      return result
    }
  }
}
