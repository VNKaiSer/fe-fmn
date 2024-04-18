import Api from '@/api/Api'

export default {
  login(obj) {
    return Api().post('api/auth/sign-in', obj)
  },
  register(obj) {
    return Api().post('api/auth/sign-up', obj)
  },
  createPitch(obj) {
    return Api().post('api/pitchs', obj)
  },
  getPitchs() {
    return Api().get('api/pitchs')
  },
  deletePitch(id) {
    return Api().delete('api/pitchs/' + id)
  },
  updatePitch(id, obj) {
    return Api().post('api/pitchs/' + id, obj)
  }
}
