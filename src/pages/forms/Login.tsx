<<<<<<< HEAD
import { FiX } from "react-icons/fi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useGlobalContext } from "../../contexts/GlobalContextProvider"
import { auth } from "../../config";
import { useState } from "react";
import axiosInstance from "../../hooks/useAxios";
=======
import { XMarkIcon } from "@heroicons/react/24/solid";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useGlobalContext } from "contexts/GlobalContextProvider"
import { auth } from "config";
import { useState } from "react";
import axiosInstance from "hooks/useAxios";
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, setShowForm } = useGlobalContext()
    const bgImage = process.env.PUBLIC_URL+'/images/bg-image.jpg'


  // LOGIN USER WITH GOOGLE PROVIDER
  const GoogleAuthHandler =  () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(credential => {
      const user = { name:credential.user.displayName, avatar:credential.user.photoURL}
      setUser(user)
      setShowForm(null)
    }, err => {
      console.dir(err)
    });
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if(email && password){
        try {
            const result = await axiosInstance.post('/auth/login', {
                email, password,
            }).then(res => res);
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
  }


  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 z-50 backdrop-blur-sm bg-white bg-opacity-30 shadow-md">
        <div className="md:w-[75%] w-[90%] flex bg-gray-200 rounded-md relative md:py-0 py-6">
            <div 
                className="bg-black bg-opacity-80 p-1 rounded-full text-white cursor-pointer absolute right-3 top-3"
                onClick={() => setShowForm(null)}
            >
<<<<<<< HEAD
                <FiX className='h-6' />
=======
                <XMarkIcon className='h-6' />
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25
            </div>
            <div className="md:w-[35%] w-full md:p-8 p-4">
                <div className="flex justify-center text-3xl font-bold">
                    Login
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
                <div className="flex justify-center text-2xl my-5">
                    Login with
                </div>
                <div className="flex items-center justify-between mb-8">
                    <button 
                        className="
                            flex-1 flex items-center justify-center border 
                            border-slate-500 text-gray-800 rounded bg-white p-2
                        "
                        onClick={GoogleAuthHandler}
                    >
                        <img className="md:h-4 h-4 md:w-6 w-4 mr-1" src={process.env.PUBLIC_URL+'/images/social-media/Facebook.svg'} alt="" />
                        Facebook
                    </button>
                    <span className="mx-2">OR</span>
                    <button 
                        className="
                            flex-1 flex items-center justify-center bg-white
                            border-slate-500 text-gray-800 border rounded p-2
                        "
                        onClick={GoogleAuthHandler}
                    >
                        <img className="md:h-4 h-4 md:w-6 w-4  mr-1" src={process.env.PUBLIC_URL+'/images/social-media/Google.svg'} alt="" />
                        Google
                    </button>
                </div>
            </div>
            
            <div 
                className="md:block hidden flex-1" 
                style={{
                    backgroundImage:`linear-gradient(to right, rgba(1, 81, 201, 0.7), rgba(1, 81, 201, 0.7)), url('${bgImage}')`,
                    backgroundSize:'cover', 
                    backgroundPosition:'center'
                }}
            >
                {/* <img src={bgImage} alt="" /> */}
            </div>
        </div>
    </div>
  )
}
