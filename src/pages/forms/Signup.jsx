import InputField from './InputField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContextProvider';
// import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from '../../config';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';


export default function Signup() {

    const { setProfile } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    // FORMIK FORM INITAL VALUES
    const initialValues = { name:'', password:'', email:'', state:'', comfirm_password:'' }

    // VALIDATION SCHEMA
    const validationSchema = Yup.object({
        email:Yup.string().required('please enter E-mal!'),
        name:Yup.string().required('please enter name!'),
        state:Yup.string().required('please choose state!'),
        password:Yup.string().required('create password!'),
        comfirm_password:Yup.string().required('comfirm password!'),
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
    <div className='w-full px-8 py-4'>
        <div className="md:h-[5rem] h-[3rem] md:w-[11rem] w-[3rem] mb-4">
            <img className='h-full w-full' src={logo} alt="" />
        </div>
        <div className="text-center mb-4">
            <span className="text-2xl">Sign up</span>
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
                        {isLoading ? 'Loading...' : 'Sign up'}
                    </button>
                </Form>
            )}
        </Formik>
        <div className="text-center mt-">
        Already have an account <Link className="text-blue-600 cursor-pointer" to='/login'>Sign in</Link>
        </div>
    </div>
  )
}

const states = [
    'Juba',
    'Wau',
    'Malakal',
    'Torit',
    'Yambio',
    'Aiel',
    'Kuajok',
    'Bor',
    'Rumbek',
    'Yirol',
]

const formFields = [
  {name:'name', type:'text', placeholder:'Enter your name'},
  {name:'age', type:'text', placeholder:'Age', options:states},
  {name:'country', type:'select', placeholder:'Country', options:states},
  {name:'city', type:'text', placeholder:'city', options:states},
  {name:'address', type:'text', placeholder:'address', options:states},
  {name:'email', type:'email', placeholder:'E-mail Address'},
  {name:'password', type:'password', placeholder:'Enter password'},
  {name:'comfirm_password', type:'password', placeholder:'Comfirm password'},
]