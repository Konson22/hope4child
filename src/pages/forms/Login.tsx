import { XMarkIcon } from "@heroicons/react/24/solid";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { useGlobalContext } from "contexts/GlobalContextProvider"
import { auth } from "config";

export default function Login() {

  const { setUser, setShowForm } = useGlobalContext()
  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'


  const GoogleAuthHandler =  () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(credential => {
      const user = { name:credential.user.displayName, avatar:credential.user.photoURL}
      console.log(user)
      setUser(user)
      setShowForm(null)
    }, err => {
      console.dir(err)
    //   setMessage(err?.code?.split('/')[1])
    });
  }

  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 z-50 backdrop-blur-sm bg-black bg-opacity-50 shadow-md">
        <div className="md:w-[70%] w-[90%] flex bg-white rounded-md relative"
            style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
        >
            <div 
                className="bg-black bg-opacity-50 p-1 rounded-full text-white cursor-pointer absolute right-3 top-3"
                onClick={() => setShowForm(null)}
            >
                <XMarkIcon className='h-6' />
            </div>
            <div className="flex-1 bg-white p-8">
                <div className="flex justify-center text-2xl mb-5">
                    Login with
                </div>
                <div className="flex items-center justify-between mb-8">
                    <button 
                        className="
                            flex-1 flex items-center justify-center border 
                            border-sky-600 rounded text-rose-500 py-2"
                            onClick={GoogleAuthHandler}
                    >
                        <img className="mr-3" src={process.env.PUBLIC_URL+'/images/Facebook.svg'} alt="" />
                        Google
                    </button>
                    <span className="mx-2">OR</span>
                    <button 
                        className="
                        flex-1 flex items-center justify-center border border-rose-500 rounded text-rose-500 py-2"
                        onClick={GoogleAuthHandler}
                    >
                        <img className="mr-3" src={process.env.PUBLIC_URL+'/images/Google.svg'} alt="" />
                        Google
                    </button>
                </div>
                <div className="flex justify-center text-xl font-bold">
                    Login with email
                </div>
                <form>
                    <div className="mb-5">
                        <span className="block m-1">E-mail</span>
                        <input className="h-[3rem] w-full border border-slate-300 rounded bg-slate-100 px-3" placeholder="E-mail" />
                    </div>
                    <div className="mb-5">
                        <span className="block m-1">Password</span>
                        <input className="h-[3rem] w-full border border-slate-300 rounded bg-slate-100 px-3" placeholder="Password" />
                    </div>
                    <button className="h-[3rem] w-full bg-rose-500 text-white rounded py-2">Login</button>
                </form>
                
                
            </div>
            <div className="md:block hidden flex-1">
                {/* <img className="h-full" src={process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'} alt="" /> */}
            </div>
        </div>
    </div>
  )
}
