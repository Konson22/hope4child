import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useChildren } from '../../contexts/ChildrenContextProvider';
import { LazyImage } from '../../components/LazyImage';
    
    
export default function SponsorChildForm() {
    
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
        <>
            <div className="flex md:bg-light-teal text-white bg-dark-teal md:px-[8%] px-4 md:pt-[2rem] md:pb-[2rem] pt-[2rem] pb-[6rem]">
                <div className="flex items-center">
                    <LazyImage cName="md:h-[250px] h-[100px] md:w-[300px] w-[100px] rounded" src={child.image} alt="" />
                    <div className="ml-5">
                        <h3 className="md:text-5xl text-3xl font-bold">{child.name}</h3>
                        <span className="text-xl ffont-bold">{child.age} years old, {child.gender} from {child.state}</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full m-0 md:px-[10%] px-4 mb-6">
                <div className="flex-1 md:block hidden">
                    <p>
                        Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good
                    </p>
                </div>
                <div className="md:w-[40%] w-full md:mt-[-200px] mt-[-4.5rem]  md:p-10 p-5 rounded bg-yellow-400">
                    <div className="my-4"> 
                        <span className="block lg:text-2xl text-xl lg:font-semibold mb-2">Sponsor {child.name}</span> 
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
            </div>
        </>
    // <div className='flex md:px-[15%] px-6 py-8'>
    //     <div className="flex-1 mr-6">
    //         <img className="h-[400px]" src={`http://localhost:3001${child.image}`} alt="" />
    //     </div>
    //     <div className="flex-1">
    //     </div>
    // </div>
    ) : (
    <div>no child</div>
    )
}