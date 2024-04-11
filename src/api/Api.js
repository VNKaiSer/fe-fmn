// axios
import axios from 'axios'
import config from '@/config.json'

const request = axios.create({
  baseURL: `${config.apiUrl}`
  // headers: {
  //     Authorization: `Sky ${localStorage.getItem('tokenUser')}`
  // }
})

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('tokenUser')
    if (token) {
      config.headers['Authorization'] = `Sky ${localStorage.getItem('tokenUser')}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const data = response.data
    if (data.success == 4) {
      localStorage.removeItem('tokenUser')
      window.location.href = window.location.origin + '/login'
      return
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default () => {
  return request
}
