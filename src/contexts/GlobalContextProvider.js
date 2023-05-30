import { useState, useContext, createContext } from 'react'


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

  return (
    <contextApi.Provider value={{ user, setUser, showForm, setShowForm }}>
      {children}
    </contextApi.Provider>
  )
}

export const useGlobalContext = () => useContext(contextApi)
