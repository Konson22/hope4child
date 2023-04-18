import { onAuthStateChanged } from 'firebase/auth';
import { useState, useContext, useEffect, createContext } from 'react'
import { auth } from '../config';


const apiContext = createContext()


export const useGlobalContext = () => useContext(apiContext)


export default function GlobalContextProvider({children}) {

  const [openModal, setOpenModal] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if(user){
        setProfile({ name:user.displayName, avatar:user.photoURL})
      }
    })

    return () => {
      listen()
    }
  }, [])

  return (
    <apiContext.Provider value={{ openModal, profile, setOpenModal, setProfile }}>
      {children}
    </apiContext.Provider>
  )
}
