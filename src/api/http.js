import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8081'

export default function (method, url, data = null) {
  method = method.toLowerCase()
  // eslint-disable-next-line eqeqeq
  if (method == 'post') {
    return axios.post(url, data)
    // eslint-disable-next-line eqeqeq
  } else if (method == 'get') {
    return axios.get(url, { params: data })
    // eslint-disable-next-line eqeqeq
  } else if (method == 'delete') {
    return axios.delete(url, { params: data })
    // eslint-disable-next-line eqeqeq
  } else if (method == 'put') {
    return axios.put(url, data)
  } else {
    console.error('未知的method' + method)
    return false
  }
}
