import { FaClock } from 'react-icons/fa'
import { childInterface } from '../util/Types'
import { Link } from 'react-router-dom'


export default function ChildCard({ child, bg='bg-white' }: { child:childInterface, bg?:string}) {

    // const [isLiked, setIsLiked] = useState(false)

  return (
    <Link 
      className={`
        bg-gradient-to-tl from-sky-100 to-cyan-50
        rounded ${bg} bg-white h-full w-full overflow-hidden shadow-md 
        p-6 border hover:border-cyan-600`} to={`/profile/${child.id}
      `}
    >
        <div className="flex justify-center">
            <img 
            className="md:h-[160px] md:w-[160px] h-[180px] w-[180px] rounded-full" 
            src={process.env.PUBLIC_URL+child.image}
            alt="" 
            />
        </div>
        <div className="mt-6">
            <h2 className="text-xl font-bold">{child.name}</h2>
            <div className="my-2">{child.state}</div>
            <div className="w-[max-content] flex items-center p-1 bg-slate-100 border text-[.8rem] mb-3 rounded-md">
            <FaClock className="mr-1" />
            Days waiting: 224
            </div>
            <div className="flex items-center text-sm  my-2">
            <span>Birthday</span>
            <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
            <span>17/02/2020</span>
            </div>
            <div className="flex items-center text-sm my-2">
            <span>Gender</span>
            <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
            <span>{child.gender}</span>
            </div>
            <div className="flex items-center text-sm my-2">
            <span>Age</span>
            <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
            <span>{child.age}</span>
            </div>
            <div className="flex mt-6">
              <Link className="px-3 py-2 bg-rose-500 text-white rounded text-sm mt-5 mr-4" to={`/profile/${child.id}`}>View profile</Link>
              <Link className="px-3 py-2 bg-rose-500 text-white rounded text-sm mt-5" to={`/profile/${child.id}`}>Sponsor</Link>
            </div>
        </div>
    </Link>
  )
}



