import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL:'http://localhost:3001',
  baseURL:'https://hope4child-api.onrender.com',
//   withCredentials: true, 
//   credentials: 'include'
})
export default axiosInstance


// import axios from 'axios'

// export const useAxios = axios.create({
//     baseURL:'http://localhost:3001/'
// })