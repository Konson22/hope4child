import { FaHeart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { childInterface } from '../util/Types'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function ChildCard({ child }: { child:childInterface}) {

    const [isLiked, setIsLiked] = useState(false)

  return (
    <div className='bg-slate-100' key={child.id}>
        <div className="relative">
            {/* <img className='md:h-[170px] h-[200px] w-full' src={process.env.PUBLIC_URL+'/images/avatars/image-1.png'} alt="" /> */}
            <img className='md:h-[170px] h-[200px] w-full' src={`https://hope4child-api.onrender.com/${child.image}`} alt="" />
            <span className="hidden bg-green-500 text-white absolute bottom-0 left-0 px-3 py-2">
                {child.state}
            </span>
        </div>
        <div className="p-3">
            <h3 className="md:text-xl font-bold mb-">{child.name}</h3>
            <span className="md:text-base line-clamp-2 text-sm mr-2">
                Meet {child.name} a {child.age} years old from {child.gender} who want to be <span className="text-rose-500">Doctor</span> in future
            </span>
            <div className="flex items-center justify-between mt-5"
                onClick={() => setIsLiked(!isLiked)}
            >
                <span className="">
                    {isLiked ? 
                        <div className="flex items-center">
                            <FaHeart className='text-rose-600 text-2xl' /> 
                            <span className="text-sm ml-1">150</span>
                        </div> :
                        <FiHeart className='text-rose-600 text-2xl' />
                    }
                </span>
                <div className="flex">
                    <Link 
                        className="bg-rose-600 text-white rounded px-3 py-1 mr-3"
                        to={`/children/profile/${child.id}`}
                    >
                        Profile
                    </Link>
                    <Link className="bg-cyan-600 text-white rounded px-3 py-1" to={`/support-child/${child.name}`}>Support</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
