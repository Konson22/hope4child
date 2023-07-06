import childrenJson from '../assets/childrenJson'
// import axiosInstance from 'hooks/useAxios'
import { useState, useContext, createContext, useEffect } from 'react'

const contextApi = createContext()

export default function ChildrenContextProvider({ children }) {

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [childrenData, setChildren] = useState(childrenJson)

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true
    async function fetchItems(){
      try{
        // const results = await axiosInstance('/children').then(res => res)
        if(isMuted){
          // results.data.length >=1 ? setChildren(results.data) : setError('No data')
        }
      }catch(error){
        if(error.status === 404 || error.status === 403 || error.status === 500){
          return setError(error?.response?.data)
        }
        setError('Error Occures!')
      }finally{
        setIsLoading(false)
      }
    }
    fetchItems()

    return () => {
      controller.abort()
      isMuted = false
    }
  }, [])


  return (
    <contextApi.Provider value={{ isLoading, error, childrenData, setChildren }}>
      {children}
    </contextApi.Provider>
  )
}

export const useChildrenContext = () => useContext(contextApi)
