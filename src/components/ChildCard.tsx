import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { childInterface } from 'util/Types'

export default function ChildCard({ child } : {child:childInterface}) {
  return (
    <div className="bg-gray-100" key={child.id}>
        <div className="h-[200px] relative">
            <img src={process.env.PUBLIC_URL+`/${child.image}`} alt="" />
            <span className="bg-main2 text-sm text-white absolute bottom-0 px-5 py-1">
                Waiting
            </span>
        </div>
        <div className="p-3">
            <h3 className="text-xl font-bold">{child.name}</h3>
            <ul className="text-s">
                <li className="flex items-center">
                    Gender: <span className="h-[2px] block mx-2 bg-gray-300 flex-1"></span> 
                    {child.gender}
                </li>
                <li className="flex items-center">
                    Age: <span className="h-[2px] block mx-2 bg-gray-300 flex-1"></span> 
                    {child.age} Years old
                </li>
                <li className="flex items-center">Location: <span className="h-[2px] block mx-2 bg-gray-300 flex-1"></span> {child.state}</li>
            </ul>
            {/* <p className="line-clamp-2">{child.bio}</p> */}
            <div className="flex items-center mt-4">
                <Link className="bg-main2 text-white rounded px-3 py-1 text-[16px]" to={`/profile/${child.id}`}>
                    Profile
                </Link>
                <Link className="bg-main text-white rounded px-3 py-1 text-[16px] mx-2" to={`/sponsor/${child.id}`}>
                    Sponsor {child.name.split(' ')[0]}
                </Link>
                <span className="flex items-center">
                    <FiHeart className='text-2xl' />
                    25
                </span>
            </div>
        </div>
    </div>
  )
}
