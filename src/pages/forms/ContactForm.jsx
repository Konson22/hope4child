import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField';
import { useState } from "react";


export default function ContactForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');


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
    const handleSubmit = async (e) => {
        setIsLoading(true);
        setMessage('')
    }
  return (
    <>
        <div className="my-4"> 
            <span className="block lg:text-2xl text-xl lg:font-semibold text-center mB-2">Contact</span> 
            <p>
                If you have feedback, questions or would like to get involved, we’d love to hear from you.
            </p>
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
                    <button type='submit' className='w-full px-3 py-2 bg-sky-500 text-white'>
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </Form>
            )}
        </Formik>
    </>
  )
}


const fields = [
    {name:'name', placeholder:'Name', type:'text'},
    {name:'address', placeholder:'Address', type:'text'},
    {name:'name', placeholder:'Name', type:'text'},
    {name:'email', placeholder:'email', type:'email'},
    {name:'amount', placeholder:'email', type:'text'},
]