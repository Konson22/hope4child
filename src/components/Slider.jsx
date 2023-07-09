import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const sliderConfiguration = {
  type: "slider",
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
    const mainGlide = new Glide(".main__glide", sliderConfiguration); // default options
    mainGlide.mount();
    // return () => mainGlide.destroy();
  }, []);

  return (
    <div className={`${cName} main__glide`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="md:text-3xl text-xl font-bold">{title}</h3>
        <div data-glide-el="controls" className="flex items-center text-2xl controls">
          <div 
            data-glide-dir="<" 
            id="prev" 
            className="bg-red-200 rounded-full flex items-center justify-center mr-5 p-2"
          >
            <FiChevronLeft />
          </div>
          <div data-glide-dir=">" id="next" 
            className="flex items-center justify-center bg-gray-200 rounded-full p-2"
          >
            <FiChevronRight className="controls-arrow" />
          </div>
        </div>
      </div>
      <div className="glide__track" data-glide-el="track">
        {children}
        
      </div>
    </div>
  )
}
