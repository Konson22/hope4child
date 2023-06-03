import { childrenDataDb } from 'assets/data'
import { useState, useContext, createContext } from 'react'
import { ChildProps } from 'util/Types'
const contextApi = createContext()


export default function ChildrenContextProvider({ children }) {

  const [isLoading, setIsLoading] = useState(false)
  const [childrenData, setChildren] = useState(childrenDataDb)

  return (
    <contextApi.Provider value={{ childrenData, setChildren, isLoading }}>
      {children}
    </contextApi.Provider>
  )
}

export const useChildrenContext = () => useContext(contextApi)
