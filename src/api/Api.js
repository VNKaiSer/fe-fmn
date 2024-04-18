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
    const token = getCookie('token')
    console.log(token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    } else {
      window.location.href = window.location.origin + '/login'
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

function getCookie(cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export default () => {
  return request
}
