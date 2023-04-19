import { Link } from "react-router-dom"
import { LazyImage } from "./LazyImage"

export const ChildCard = ({ child, id }) => {
    return(
      <div className="border w-full bg-gray-50 shadow-lg lg:mb-0 mb-6" key={child.id}>
        <LazyImage cName='lg:h-[170px] h-[250px] w-full' src={child.image} alt='' />
        <div className="p-3">
          <h3 className="text-xl font-semibold m-2">{child.name}</h3>
          <span className="text-base">Gender: {child.gender}</span>
          <span className="text-base ml-3">Age:{child.age}</span>
          <p className="text-base">Location: {child.state}, Hai Malakal</p>
          {/* <p className="mt-1">{child.bio}</p> */}
          <Link className="flex justify-center w-full text-sm text-white p-2 bg-gradient-to-bl to-sky-300 from-cyan-500 rounded mt-4" to={`/child-profile/${child._id}`}>Choose me</Link>
        </div>
      </div>
    )
  }