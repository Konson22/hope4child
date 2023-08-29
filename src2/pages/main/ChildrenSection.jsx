import { useChildrenContext } from "../../contexts/ChildrenContextProvider"
import "@glidejs/glide/dist/css/glide.core.min.css";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const sliderConfiguration = {
  type: "carousel",
  startAt: 0,
  animationTimingFunc: "ease-in-out",
  gap: 25,
  perView: 4,
  breakpoints: {
    600: {
      perView: 1,
    },
  },
};

export default function ChildrenSection() {

    const { childrenData } = useChildrenContext()

    useEffect(() => {
    const mainGlide = new Glide(".glide", sliderConfiguration); // default options
    mainGlide.mount();
    return () => mainGlide.destroy();
    }, []);

  return (
    <div className="md:px-[5%] px-3 py-[3rem]">
        <div className="text-center md:px-[10%]">
            <h2 className="md:text-5xl text-2xl">World without poprty</h2>
            <p>
                Then there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. These children often drop out of school and are much more likely to join gangs, steal and become addicted to drugs and alcohol.
            </p>
        </div>
        <div className='glide'>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl">Sponsor now</h2>
                <div className='glide__arrows flex items-center' data-glide-el='controls'>
                    <button
                        className='glide__arrow glide__arrow--prev bg-gray-200 text-2xl rounded-full flex items-center justify-center mr-5 p-2'
                        data-glide-dir='<'
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        className='glide__arrow glide__arrow--next bg-gray-200 text-2xl rounded-full flex items-center justify-center p-2'
                        data-glide-dir='>'
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
            <div className='glide__track' data-glide-el='track'>
                <div className='glide__slides'>
                {childrenData.map((child) => (
                    <div className="glide__slide bg-gray-100 shadow-md rounded p-4">
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
            </div>
        </div>
    </div>
  )
}
