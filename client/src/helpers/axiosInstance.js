import axios from 'axios'

// const headers = {
//     withCredentials: true, credentials: 'include'
// }
const axiosInstance = axios.create({
  baseURL:'http://localhost:3001',
  // baseURL:'https://amal-api.onrender.com',
  withCredentials: true, 
  credentials: 'include'
})
export default axiosInstance
