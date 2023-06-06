import { XMarkIcon } from "@heroicons/react/24/solid";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { useGlobalContext } from "contexts/GlobalContextProvider"
import { auth } from "config";
import { useState } from "react";
import axiosInstance from "hooks/useAxios";
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const { setUser, setShowForm } = useGlobalContext()
  const bgImage = process.env.PUBLIC_URL+'./images/pexels-lagos-food-bank-initiative-7849435.jpg'


  // LOGIN USER WITH GOOGLE PROVIDER
  const GoogleAuthHandler =  () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(credential => {
      const user = { name:credential.user.displayName, avatar:credential.user.photoURL}
      console.log(user)
      setUser(user)
      setShowForm(null)
    }, err => {
      console.dir(err)
    });
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if(email && password){
        try {
            const result = await axiosInstance.post('/auth/login', {
                email, password
            }).then(res => res);
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
  }


  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 z-50 backdrop-blur-sm bg-white bg-opacity-30 shadow-md">
        <div className="md:w-[70%] w-[90%] flex bg-white rounded-md relative"
            // style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
        >
            <div 
                className="bg-black bg-opacity-50 p-1 rounded-full text-white cursor-pointer absolute right-3 top-3"
                onClick={() => setShowForm(null)}
            >
                <XMarkIcon className='h-6' />
            </div>
            <div className="flex-1 bg-cyan-500 text-white p-8">
                <div className="flex justify-center text-2xl mb-5">
                    Login with
                </div>
                <div className="flex items-center justify-between mb-8">
                    <button 
                        className="
                            flex-1 flex items-center justify-center border 
                            border-white text-gray-800 rounded bg-white py-2"
                            onClick={GoogleAuthHandler}
                    >
                        <img className="mr-3" src={process.env.PUBLIC_URL+'/images/social-media/Facebook.svg'} alt="" />
                        Facebook
                    </button>
                    <span className="mx-2">OR</span>
                    <button 
                        className="
                        flex-1 flex items-center justify-center bg-white border-white text-gray-800 border rounded  py-2"
                        onClick={GoogleAuthHandler}
                    >
                        <img className="mr-3" src={process.env.PUBLIC_URL+'/images/social-media/Google.svg'} alt="" />
                        Google
                    </button>
                </div>
                <div className="flex justify-center text-xl font-bold">
                    Login with email
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <span className="block m-1">E-mail</span>
                        <input 
                        name="email" 
                        className="h-[3rem] w-full border border-slate-300 rounded bg-slate-100 px-3" 
                        placeholder="E-mail" 
                        onChange={e => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="mb-5">
                        <span className="block m-1">Password</span>
                        <input 
                            name="password" 
                            className="h-[3rem] w-full border border-slate-300 rounded bg-slate-100 px-3" 
                            placeholder="Password" 
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="h-[3rem] w-full bg-rose-500 text-white rounded py-2" type="submit">Login</button>
                </form>
                
                
            </div>
            
            <div className="md:block hidden flex-1" style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}>
                {/* <img className="h-full" src={process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'} alt="" /> */}
            </div>
        </div>
    </div>
  )
}
