import { FaGoogle, FaTimes } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { auth } from "../../config";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField';
import { useState } from "react";


export default function Login() {

    const { setProfile, setOpenModal } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const GoogleAuthHandler = async () => {
        try {
            setIsLoading(true)
            signInWithPopup(auth, new GoogleAuthProvider()).then(credential => {
                const user = { name:credential.user.displayName, avatar:credential.user.photoURL}
                setProfile(user);
                setOpenModal(null);
            }, err => {
                setMessage(err?.code?.split('/')[1]);
            });
        } catch (error) {
            setMessage('Error');
        }finally{
            setIsLoading(false);
        }
    }
    
    // FORMIK FORM INITAL VALUES
    const initialValues = {
        password:'',
        email:''
    }

    // VALIDATION SCHEMA
    const validationSchema = Yup.object({
        password:Yup.string().required('please enter password!'),
        email:Yup.string().required('please enter email!')
    });

    // LOGIN USER WITH EMAIL AND PASSWORD
    const handleSubmit = async ({email, password}) => {
        setIsLoading(true);
        try {
            signInWithEmailAndPassword(auth, email, password).then(res => {
                setProfile(res)
                console.log(res)
            }, err => {
                setMessage(err?.code?.split('/')[1])
                console.dir(err?.code?.split('/')[1])
            })
            
        } catch (error) {
            setMessage('Something went wrong!')
            console.log(error)
        }finally{
            setIsLoading(false);
        }
    }
  return (
    <div className='lg:px-[35%] px-[5%] h-screen fixed inset-0 z-50 overflow-hidden bg-gray-400 bg-opacity-25 backdrop-blur-sm pt-[5rem]'>
         <div className="w-full lg:p-10 p-6 rounded bg-white relative shadow-md">
            <div 
                className="rounded-full cursor-pointer text-gray-500 absolute top-[.5rem] right-[.5rem] text-xl"
                onClick={() => setOpenModal(null)}
            >
                <FaTimes />
            </div>
            <div className="my-4"> 
                <span className="block lg:text-2xl text-xl lg:font-semibold text-center mB-2">Login</span> 
                {message && <span className='text-red-500'>{message}</span>}
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        {fields.map(field => (
                            <div className='mb-4'>
                            <InputField 
                                isLoading={isLoading}
                                name={field.name}
                                placeholder={field.placeholder}
                            />
                            </div>
                        ))}
                        <button type='submit' className='w-full px-3 py-2 bg-amber-500 text-white'>
                            {isLoading ? 'Loading...' : 'Login'}
                        </button>
                    </Form>
                )}
            </Formik>
            <button className='flex items-center justify-center w-full px-3 py-2 bg-red-600 text-white my-4'
                onClick={GoogleAuthHandler}
            >
                <FaGoogle className='mr-2' />Login with Google
            </button>
            <div className="flex justify-center mt-6" onClick={() => setOpenModal('signup')}>
                Don't have account 
                <span className="text-blue-800 ml-2 cursor-pointer">Sign up</span>
            </div>
        </div>
    </div>
  )
}


const fields = [
    {name:'email', placeholder:'email', type:'email'},
    {name:'password', placeholder:'Enter password', type:'password'},
]