import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useChildren } from '../../contexts/ChildrenContextProvider';


export default function RequestMeetupForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { childId } = useParams();
    const { childrenData } = useChildren()

    let child = ''
    child = childrenData.length >= 1 && childrenData.filter(child => child._id === parseInt(childId))[0]
    

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

  return child ? (
    <div className='md:px-[35%] px-6 py-8'>
        <div className="my-4"> 
            <span className="block lg:text-2xl text-xl lg:font-semibold mB-2">Request for meetup</span> 
            {message && <span className='text-red-500'>{message}</span>}
        </div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div className="mb-5">
                        <label htmlFor="child_name" className='block md:text-base text-sm m-1'>Child name</label>
                        <input
                            name='child_name'
                            className='lg:h-[3.5rem] h-[3rem] focus:border-b-2 focus:border-b-green-500 focus:outline-none bg-gray-100 rounded w-full  px-3'
                            value={child.name}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name" className='block m-1 md:text-base text-sm'>Name</label>
                        <input
                            name='name'
                            className='lg:h-[3.5rem] h-[3rem] focus:border-b-2 focus:border-b-green-500 focus:outline-none bg-gray-100 rounded w-full  px-3'
                            placeholder='Your name'
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className='block md:text-base text-sm m-1'>E-mail</label>
                        <input
                            name='email'
                            className='lg:h-[3.5rem] h-[3rem] focus:border-b-2 focus:border-b-green-500 focus:outline-none bg-gray-100 rounded w-full  px-3'
                            placeholder='example@gmail.com'
                        />
                    </div>
                    <div className="flex justify-between mb-5">
                        <div className="w-[49%]">
                            <label htmlFor="date" className='block md:text-base text-sm m-1'>Pick Date</label>
                            <input
                                name='date'
                                type='date'
                                className='lg:h-[3.5rem] h-[3rem] focus:border-b-2 focus:border-b-green-500 focus:outline-none bg-gray-100 rounded w-full  px-3'
                                placeholder='example@gmail.com'
                            />
                        </div>
                        <div className="w-[49%]">
                            <label htmlFor="date" className='block md:text-base text-sm m-1'>Pick Time</label>
                            <input
                                name='date'
                                type='time'
                                className='lg:h-[3.5rem] h-[3rem] focus:border-b-2 focus:border-b-green-500 focus:outline-none bg-gray-100 rounded w-full  px-3'
                                placeholder='example@gmail.com'
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className='block md:text-base text-sm m-1'>Request</label>
                        <textarea
                            name='message'
                            className='lg:h-[6.5rem] h-[5.5rem] focus:border-b-2 focus:border-b-green-500 focus:outline-none bg-gray-100 rounded w-full  p-3'
                            placeholder='Write your message...'
                        ></textarea>
                    </div>
                    <button type='submit' className='w-full px-3 py-2 bg-amber-500 text-white'>
                        {isLoading ? 'Loading...' : 'Send'}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
  ) : (
    <div>no child</div>
  )
}