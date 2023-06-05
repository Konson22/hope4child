import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { childInterface } from "util/Types";


export const ChildCard:React.FC<{child:childInterface}> = ({ child }) => {
  return (
    <div className="bg-slate-100 border rounded overflow-hidden">
      <img className="md:h-[200px] h-[150px] w-full" src={`http://localhost:3001/${child.image}`} alt="" />
      <div className="p-3">
        <h3 className="md:text-xl font-bold">{child.name}</h3>
        <span className="block">Gender: {child.gender}</span>
        <span className="block">Age: {child.age}</span>
        <p className="line-clamp-2">
          {/* Reasons have day were meat dominion they're moving setting great very us hath the */}
        </p>
        <Link 
          className='w-full flex items-center justify-center text-white rounded bg-rose-400 px- py-2 mt-2' 
          to={`/profile/${child.id}`}
        >
          Profile
          <ChevronRightIcon className="h-4" />
        </Link>
      </div>
    </div>
  )
}
