import axios from 'axios'

const axiosInstance = axios.create({
  baseURL:'http://localhost:3001',
//   withCredentials: true, 
//   credentials: 'include'
})
export default axiosInstance


// import axios from 'axios'

// export const useAxios = axios.create({
//     baseURL:'http://localhost:3001/'
// })