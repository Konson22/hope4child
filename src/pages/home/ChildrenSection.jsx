import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi"
import { Link } from "react-router-dom"
// import { childInterface } from "util/Types"


export default function ChildrenSection() {

  const { childrenData } = useChildrenContext()

  return (
    <div className='px-[5%] py-[4rem]'>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Sponsor a child now!</h2>
        <div className="flex items-center">
          <span className="bg-gray-200 text-2xl rounded-full p-2 block mr-4"><FiChevronLeft /></span>
          <span className="bg-gray-200 text-2xl rounded-full p-2"><FiChevronRight /></span>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-12">
        {childrenData.slice(0,4).map((child) => (
          <div className="bg-gray-100 rounded p-4">
            <img className="h-[200px] w-[200px] rounded-full overflow-hidden mx-auto my-0" src={process.env.PUBLIC_URL+`/${child.image}`} alt="" />
            <div className="mt-4">
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
              <div className="flex items-center mt-4">
                <Link className="bg-main2 text-white rounded px-3 py-2 text-[16px]" to={`/profile/${child.id}`}>
                  Profile
                </Link>
                <Link className="bg-main text-white rounded px-3 py-2 text-[16px] mx-2" to={`/sponsor/${child.id}`}>
                  Sponsor 
                </Link>
                <span className="flex items-center">
                  <FiHeart className='text-2xl' />
                  25
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
