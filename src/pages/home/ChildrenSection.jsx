import Glide from "@glidejs/glide";
import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";


const sliderConfiguration = {
  gap: 20,
  perView: 4,
  startAt: 0,
  // autoplay: 3000,
  rewind: false,
  type: "carousel",
  breakpoints: {
      750: {
        perView: 1,
      },
      1100: {
        perView: 1,
        peek: 80,
      },
  }
};

export default function ChildrenSection() {

    const { childrenData } = useChildrenContext()
      const slider = new Glide('.glide', sliderConfiguration);
  

  useEffect(() => {
    slider.mount()
  }, [slider])


  return (
    <div className='md:px-[8%] px-5 md:py-[4rem] py-[2rem] glide relative mt-10 bg-gradient-to-tl from-sky-200 to-green-100'>
      <div className="flex items-center justify-between text-2xl font-bol mb-6">
        <h3 className="md:block hidden text-3xl">Children wating for sponsorship</h3>
        <h3 className="md:hidden block  text-3xl">Waiting</h3>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='
              glide__arrow glide__arrow--prev rounded-full p-2 mr-5
              text-2xl bg-cyan-100 hover:bg-cyan-500
            '
            data-glide-dir='<'
          >
            <FiChevronLeft />
          </button>
          <button
            className='
              glide__arrow glide__arrow--next rounded-full p-2
              text-2xl bg-cyan-100 hover:bg-cyan-500
            '
            data-glide-dir='>'
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      
      <div className='glide__track' data-glide-el='track'>
        <div className='glide__slides'>
          {(childrenData && childrenData.length > 0) &&
            childrenData.map((c, i) => (
              <Link 
                className="
                  glide__slide slider rounded bg-white bg-opacity-50 backdrop-blur-2xl h-full 
                  w-full overflow-hidden 
                  shadow-md p-6 border hover:border-cyan-600
                "
                key={i}
                to={`/profile/${c.id}`}
              >
                <div className="flex justify-center">
                  <img 
                    className="md:h-[160px] md:w-[160px] h-[180px] w-[180px] rounded-full" 
                    src={process.env.PUBLIC_URL+c.image}
                    alt="" 
                  />
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-bold">{c.name}</h2>
                  <div className="my-2">{c.state}</div>
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
                    <span>{c.gender}</span>
                  </div>
                  <div className="flex items-center text-sm my-2">
                    <span>Age</span>
                    <span className="flex-1 h-[.1rem] bg-slate-300 mx-2"></span>
                    <span>{c.age}</span>
                  </div>
                  <div className="mt-6">
                    <Link className="px-3 py-2 bg-rose-500 text-white rounded text-sm mt-5" to={`/profile/${c.id}`}>View profile</Link>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <div className="text-center mt-12">
        <Link className="bg-rose-500 text-white rounded px-5 py-2" to='/children'>Show more</Link>
      </div>
    </div>
  )
}
