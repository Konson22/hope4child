import { useChildrenContext } from "../../contexts/ChildrenContextProvider"
import "@glidejs/glide/dist/css/glide.core.min.css";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import Slider from "../../components/Slider";


export default function ChildrenSection() {

    const { childrenData } = useChildrenContext()


  return (
    <Slider title='Children waiting for sponsorship' cName='md:px-[5%] py-[4rem]'>
        <div className="glide__slides">
            {childrenData.map((child) => (
                <div className="glide__s bg-gray-100 shadow-md rounded p-4">
                    <img 
                        className="h-[200px] w-[200px] rounded-full overflow-hidden mx-auto my-0" 
                        src={process.env.PUBLIC_URL+`/${child.image}`} 
                        alt="" 
                    />
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
    </Slider>
  )
}
