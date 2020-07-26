import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "28a9f824-ecc3-4cc5-9015-9760c4dda242"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`)
      .then(res => res.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(res => res.data);
  }
}

