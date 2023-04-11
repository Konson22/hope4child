import { auth } from "../../config";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField';
import { useState } from "react";


export default function DonateForm() {

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
    }
  return (
    <div className=''>
        <div className="my-4"> 
            <span className="block lg:text-2xl text-xl lg:font-semibold text-center mB-2">Donate</span> 
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
    </div>
  )
}


const fields = [
    {name:'name', placeholder:'Name', type:'text'},
    {name:'address', placeholder:'Address', type:'text'},
    {name:'name', placeholder:'Name', type:'text'},
    {name:'email', placeholder:'email', type:'email'},
    {name:'amount', placeholder:'email', type:'text'},
]