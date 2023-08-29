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

export default function Slider({ children, title, cName }) {
    
  useEffect(() => {
    const mainGlide = new Glide(".glide", sliderConfiguration); // default options
    mainGlide.mount();
    // return () => mainGlide.destroy();
  }, []);

  return (
    
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
          
          </div>
        </div>
    </div>
  )
}
