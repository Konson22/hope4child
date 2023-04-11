import { FiUser } from 'react-icons/fi'
import InputField from './InputField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContextProvider';
import { Link } from 'react-router-dom';
// import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from '../../config';


export default function Login() {

    const { setProfile } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    // FORMIK FORM INITAL VALUES
    const initialValues = { email:'', password:'' }

    // VALIDATION SCHEMA
    const validationSchema = Yup.object({
      email:Yup.string().required('please enter E-mal!'),
      password:Yup.string().required('Please enter password!'),
    });

    // LOGIN USER WITH EMAIL AND PASSWORD
    const handleSubmit = async ({email, password}) => {
      setIsLoading(true);
      setMessage('')
      setProfile(null)
      // try {
      //   signInWithEmailAndPassword(auth, email, password).then(res => {
      //     console.log(res)
      //     setProfile(null)
      //   }, err => {
      //     setMessage(err?.code?.split('/')[1])
      //     console.dir(err?.code?.split('/')[1])
      //   })
      // } catch (error) {
      //   setMessage('Something went wrong!')
      //   console.log(error)
      // }finally{
      //   setIsLoading(false);
      // }
    }

  return (
    <div className='h-screen w-full flex justify-center items-center z-50'>
      <div className="md:w-[27%] w-[85%]">
        <div className="text-center mb-4">
          <div className="flex justify-center items-center text-4xl">
            <FiUser />
          </div>
          <span className="text-2xl">Login</span>
          {message && <span className='text-red-500'>{message}</span>}
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
                {() => (
                    <Form>
                      {formFields.map(field => (
                        <div className='mb-4'>
                          <InputField 
                            name={field.name}
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                      <button className="w-full px-5 py-2 bg-green-600 text-white my-2 rounded" type='submit'>
                        {isLoading ? 'Loading...' : 'Sign in'}
                      </button>
                  </Form>
                )}
            </Formik>
          <div className="text-center mt-4">
            Don't have an account <Link className="text-blue-600 cursor-pointer" to='/signup' >Sign up</Link>
          </div>
        </div>
    </div>
  )
}

const formFields = [
  {name:'email', type:'email', placeholder:'E-mail Address'},
  {name:'password', type:'password', placeholder:'Enter password'},
]