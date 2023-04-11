import { FaTimes } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField';
import { useState, useEffect } from "react";
import { auth, db } from "../../config";
import { collection, addDoc, getDocs } from "firebase/firestore";


export default function Signup() {

    const { setOpenModal } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');


    // FORMIK FORM INITAL VALUES
    const initialValues = { email:'', name:'', password:'', comfirm_password:'' }

    // VALIDATION SCHEMA
    const validationSchema = Yup.object({
        name:Yup.string().required('please enter name!'),
        email:Yup.string().required('please enter email!'),
        password:Yup.string().required('please enter password!'),
        comfirm_password:Yup.string().required('please enter password!'),
    });

    
    
    useEffect(() => {
        
        const colRef = collection(db, 'users')
        const getUser = async () => {
            try {
                const snapShut = await getDocs(colRef, `users/464BjqMADq7A8Eboiw73`)
                const docs = snapShut.docs.map(doc => doc.data())
                console.log(docs)
            } catch (error) {
                console.log(error)
            }
        }

        getUser()
    }, [])
    // LOGIN USER WITH EMAIL AND PASSWORD
    const handleSubmit = async ({name, email, password}) => {
        const colRef = collection(db, 'users')

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then(credentail => {
            if(credentail.user){
                addDoc(colRef, {uid:credentail.user.uid, avatar:'test', displayName:name}).then(res => {
                    console.log(res)
                }, err => {
                    console.log(err?.code?.split('/')[1])
                })
            }
            setIsLoading(false);
        }, err => {
            setMessage(err?.code?.split('/')[1])
            setIsLoading(false);
        })
    }

    
  return (
    <div className='lg:px-[35%] px-[5%] h-screen fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-25 backdrop-blur-sm pt-[5rem]'>
         <div className="w-full lg:p-6 p-6 rounded bg-white relative">
            <div 
                className="rounded-full cursor-pointer text-gray-500 absolute top-[.5rem] right-[.5rem] text-xl"
                onClick={() => setOpenModal(null)}
            >
                <FaTimes />
            </div>
            <div className="my-4"> 
                <span className="block lg:text-2xl text-xl lg:font-semibold text-center mB-2">Sign up</span> 
                {message && <span className='text-red-500'>{message}</span>}
                {isLoading && 'Loading...'}
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
                            {isLoading ? 'Loading...' : 'Sign up'}
                        </button>
                    </Form>
                )}
            </Formik>
            <div className="flex justify-center mt-6" onClick={() => setOpenModal('login')}>
                Already have an account 
                <span className="text-blue-800 ml-2 cursor-pointer">Login</span>
            </div>
        </div>
    </div>
  )
}


const fields = [
    {name:'name', placeholder:'Name', type:'text'},
    {name:'email', placeholder:'email', type:'email'},
    {name:'password', placeholder:'Create password', type:'password'},
    {name:'comfirm_password', placeholder:'Confirm password', type:'password'},
]