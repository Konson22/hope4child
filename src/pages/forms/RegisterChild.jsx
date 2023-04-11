import { useChildren } from '../../contexts/ChildrenContextProvider';
import { useState } from 'react';
import { FaRegImages } from 'react-icons/fa';
import axiosInstance from '../../helpers/axiosInstance';
import { FiCheck } from 'react-icons/fi';


export default function RegisterChild(){

    const { setChildren } = useChildren()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(60)


    const handleSubmit = async ev => {
        ev.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(ev.target)
            const result = await axiosInstance.post('/children/register', formData, postOptions).then(res => res)
            setChildren(prevItems => {
                return [...prevItems, result.data]
            })
        } catch (error) {
            setMessage(error?.response?.data)
        }finally{
            setLoading(false)
        }
    }
    
    //AXIOS HEADER OPTIONS
    const postOptions = {
        widthCredentials:true, 
        withCredentials:'include',
        onUploadProgress:percentageLoaded => {
        const {total, loaded} = percentageLoaded
        const percent = Math.floor((loaded / total) * 100)
        percent <= 100 && setUploadPercentage(percent)
        }
    }
    
    

  return(
    <div className='lg:mx-[15%] lg:py-[4rem] py-[2rem] flex lg:bg-gray-300 p-8 shadow-sm'>
        <div className="flex-1">
            <div className="text-center mb-8">
                <h2 className="text-3xl">Register a child</h2>
                {loading && "Loading..."}
                {message && <div className='mt-3 text-red-500'>{message}</div>}
            </div>
            <form onSubmit={handleSubmit}>
                {formFields.map(field => (
                    <div className="h-[3rem] mb-5">
                        <input className="h-full bg-white w-full px-3" {...field} />
                    </div>
                ))}
                <div className="h-[3rem] mb-5">
                    <label className='flex items-center cursor-pointer' htmlFor="image" >
                        <span className="px-4 py-2 rounded bg-green-600 text-white mr-3">
                            <FaRegImages className='text-2xl' />
                        </span>
                        Choose
                    </label>
                    <input className='hidden' name='image' id='image' type="file" />
                </div>
                <button className="bg-sky-500 text-white rounded py-3 w-full">Submit</button>
            </form>
        </div>
        <div className="lg:block hidden flex-1"></div>
        {uploadPercentage > 0 && <Loader uploadPercentage={uploadPercentage} setUploadPercentage={setUploadPercentage} />}
    </div>
   )
}


const Loader = ({ uploadPercentage, setUploadPercentage }) => {
    return(
        <div className="h-screen fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="md:w-[35%] w-[90%] bg-white p-6 text-center rounded-md">
                    {(uploadPercentage > 0 && uploadPercentage < 100) ?
                        <>
                            <span className="md:text-2xl">Uploading...</span>
                            <div className="md:h-[1.6rem] h-[1rem] bg-gray-50 rounded-[1rem] overflow-hidden shadow-inner md:my-6 my-4">
                                <div 
                                    className="h-full shadow-md rounded-[1rem] bg-gradient-to-l from-red-200 to-sky-400" 
                                    style={{width:`${uploadPercentage}%`}}>
                                </div>
                            </div>
                            <span className="md:text-3xl">{uploadPercentage}%</span>
                        </>:
                        <div className="flex flex-col items-center justify-center">
                            <span className="bg-green-200 shadow-md rounded-full md:text-5xl text-3xl p-3 my-4">
                                <FiCheck />
                            </span>
                            Successfully Uploaded!
                            <button className="bg-green-200 px-6 py-1 rounded mt-4" onClick={() => setUploadPercentage(0)}>Ok</button>
                        </div>
                    }
                </div>
        </div>
    )
}


const formFields = [
    {name:'name', placeholder:'Child Name', type:'text'},
    {name:'gender', placeholder:'Gender', type:'text'},
    {name:'age', placeholder:'Age', type:'text'},
    {name:'state', placeholder:'State', type:'text'},
    {name:'address', placeholder:'Address', type:'text'},
    {name:'parent_contact', placeholder:'Parent contact', type:'text'},
    {name:'bio', placeholder:'Child story', type:'textarea'},
]