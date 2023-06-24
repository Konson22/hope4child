import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'
import { childInterface } from '../util/Types'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function ChildCard({ child, bg='bg-white' }: { child:childInterface, bg?:string}) {

  const [isOpen, setIsOPen] = useState(false)
  return (
    <div 
      className={`
        rounded ${bg} bg-white h-full w-full overflow-hidden shadow-md 
        border hover:border-cyan-600`
      }
    >
      <div className="md:h-[200px] h-[260px]">
        <img src={process.env.PUBLIC_URL+child.image} alt="" />
      </div>
      <div className="mt- p-3">
        <div className="kflex items-center justify-between">
          <h2 className="text-xl font-bold">{child.name}</h2>
          {/* <div 
            className="
              w-[max-content] flex items-center p-2 bg-cyan-400 text-white 
              border text-[.8rem] my-2 rounded-md
            "
          >
            <FaClock className="mr-1" />
            Days waiting: 224
          </div> */}
        </div>
        <p className='line-clamp-3'>{child.name} is {child.age} years old {child.gender} living in {child.state} Child sponsorship is a program that enables you to support children, their families and entire communities, giving them the chance to grow up healthy, educated and safe, forever changing their life and future </p>
        {/* <div className="flex items-center my-2">
          <span>Gender</span>
          <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
          <span>{child.gender}</span>
        </div>
        <div className="flex items-center my-2">
          <span>Location:</span>
          <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
          <span>{child.state}</span>
        </div>
        <div className="flex items-center my-2">
          <span>Age</span>
          <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
          <span>{child.age}</span>
        </div> */}
        <div className="flex items-center justify-between mt-4">
          <Link className="px-3 py-2 bg-rose-500 text-white rounded text-sm" to={`/profile/${child.id}`}>View profile</Link>
          <div className="relative">
            <button className="flex items-center px-3 py-2 bg-rose-500 text-white rounded text-sm"
              onClick={() => setIsOPen(!isOpen)}
            >
              <FiShare2 className='text-xl mr-1' />
              Share
            </button>
            {isOpen && <ShareButtons /> }
          </div>
        </div>
      </div>
    </div>
  )
}


const ShareButtons = () => {
  return(
    <div className="w-[max-content] grid grid-cols-2 gap-7 absolute bottom-[120%] right-0 bg-gray-200 rounded px-8 py-5">
      <span className="bg-blue-500 text-white border border-blue-500 p-1 text-xl rounded-full">
        <FaFacebookF />
      </span>
      <span className="border border-sky-500 bg-sky-500 text-white p-1 text-xl rounded-full">
        <FaInstagram />
      </span>
      <span className="bg-green-500 text-white border border-green-500 p-1 text-xl rounded-full">
        <FaWhatsapp />
      </span>
      <span className="bg-cyan-500 text-white border border-cyan-500 p-1 text-xl rounded-full">
        <FaTwitter />
      </span>
    </div>
  )
}

// export default function ChildCard({ child, bg='bg-white' }: { child:childInterface, bg?:string}) {

//   return (
//     <Link 
//       className={`
//         bg-gradient-to-tl from-sky-100 to-cyan-50
//         rounded ${bg} bg-white h-full w-full overflow-hidden shadow-md 
//         p-6 border hover:border-cyan-600`} to={`/profile/${child.id}
//       `}
//     >
//         <div className="flex justify-center">
//           <img 
//             className="md:h-[160px] md:w-[160px] h-[180px] w-[180px] rounded-full" 
//             src={process.env.PUBLIC_URL+child.image}
//             alt="" 
//           />
//         </div>
//         <div className="mt-6">
//             <h2 className="text-xl font-bold">{child.name}</h2>
//             <div className="my-2">{child.state}</div>
//             <div className="w-[max-content] flex items-center p-1 bg-slate-100 border text-[.8rem] mb-3 rounded-md">
//             <FaClock className="mr-1" />
//             Days waiting: 224
//             </div>
//             <div className="flex items-center text-sm  my-2">
//             <span>Birthday</span>
//             <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
//             <span>17/02/2020</span>
//             </div>
//             <div className="flex items-center text-sm my-2">
//             <span>Gender</span>
//             <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
//             <span>{child.gender}</span>
//             </div>
//             <div className="flex items-center text-sm my-2">
//             <span>Age</span>
//             <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
//             <span>{child.age}</span>
//             </div>
//             <div className="flex mt-6">
//               <Link className="px-3 py-2 bg-rose-500 text-white rounded text-sm mt-5 mr-4" to={`/profile/${child.id}`}>View profile</Link>
//               <Link className="px-3 py-2 bg-rose-500 text-white rounded text-sm mt-5" to={`/profile/${child.id}`}>Sponsor</Link>
//             </div>
//         </div>
//     </Link>
//   )
// }



