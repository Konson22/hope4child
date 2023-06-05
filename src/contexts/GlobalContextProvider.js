import { auth } from 'config'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useContext, createContext, useEffect } from 'react'


// interface User {
//   name: string;
//   email: string;
// }

// interface ContextProps {
//   children:ReactNode;
//   user: User | null;
//   setUser:React.Dispatch<React.SetStateAction<User | null>>;
// }

const contextApi = createContext()


export default function GlobalContextProvider({ children }) {

  const [showForm, setShowForm] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(!user){
        setUser(null)
      }else{
        setUser({
          id:user.uid,
          name:user.displayName
        })
      }
    })
  }, [])

  return (
    <contextApi.Provider value={{ user, setUser, showForm, setShowForm }}>
      {children}
    </contextApi.Provider>
  )
}

export const useGlobalContext = () => useContext(contextApi)
