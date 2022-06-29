import axios from 'axios'
const baseUrl = 'http://localhost:3000/dev'
// request interceptor to add the auth token header to requests
axios.interceptors.request.use(
  (config) => {
    // config.headers['Content-Type'] = 'application/json'
    // config.headers['Access-Control-Allow-Origin'] = '*'
    config.validateStatus = function (status) {
      return status >= 200 && status < 500 && status !== 401
    }
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      config.headers['Authorization'] = `${accessToken}`
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
// response interceptor to refresh token on receiving token expired error

// axios.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   function (error) {
//     const originalRequest = error.config
//     if (error.response.status === 401 && !originalRequest._retry && originalRequest.url !== baseUrl + '/auth/refresh_token') {
//       originalRequest._retry = true
//       return axios.post(`${baseUrl}/refresh_token`).then((res) => {
//         if (res.status === 200) {
//           localStorage.setItem('accessToken', res.data.accessToken)
//           console.log('Access token refreshed!')
//           return axios(originalRequest)
//         }
//       })
//     }
//     return Promise.reject(error)
//   }
// )

axios.defaults.withCredentials = true
// functions to make api calls
const api = {
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  },
  login: (body) => {
    return axios.post(`${baseUrl}/user/login`, body)
  },
  register: (body) => {
    return axios.post(`${baseUrl}/user/register`, body)
  },
  getAllEvent: (body) => {
    return axios.get(`${baseUrl}/event/getAll`, body)
  },
  getEvent: (id) => {
    return axios.get(`${baseUrl}/event/get/${id}`)
  },
  getProduct: (id) => {
    return axios.get(`${baseUrl}/product/get/${id}`)
  },
  createDeal: (body) => {
    return axios.post(`${baseUrl}/deal/create`, body)
  },
  getMyEvent: () => {
    return axios.get(`${baseUrl}/myevent/getAll`)
  },
  momopayment: (body) => {
    return axios.post(`${baseUrl}/momopayment`, body)
  },
  rechange: (body) => {
    return axios.post(`${baseUrl}/user/rechange`, body)
  },
  getUserInfomation: (body) => {
    return axios.get(`${baseUrl}/user/getinfomation`, body)
  },
  updateUser: (body) => {
    return axios.post(`${baseUrl}/user/update`, body)
  },
  eventGetDeal: (id) => {
    return axios.get(`${baseUrl}/event/getAlldeal/${id}`)
  },
  getNotification: () => {
    return axios.get(`${baseUrl}/user/notification`)
  },
  getAllWinner: () => {
    return axios.get(`${baseUrl}/winner/getAll`)
  },
  reward: (body) => {
    return axios.post(`${baseUrl}/winner/reward`, body)
  }
}

export default api
