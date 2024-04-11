import Api from '@/api/Api'

export default {
  login(obj) {
    return Api().post('api/auth/sign-in', obj)
  },
  register(obj) {
    return Api().post('api/auth/sign-up', obj)
  }
}
