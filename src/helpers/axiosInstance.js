import axios from 'axios'

// const headers = {
//     withCredentials: true, credentials: 'include'
// }
const axiosInstance = axios.create({
  // baseURL:'https://amal-api.onrender.com',
  baseURL:'http://localhost:3001',
  withCredentials: true, 
  credentials: 'include'
})
export default axiosInstance
