import axios from '../axios'

export default {
  getTeacherList() {
    return axios.get('/teacher/list')
  }
}
