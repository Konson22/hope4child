import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const sliderConfiguration = {
    type: "carousel",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 100,
    perView: 3
};

export const Mainslider = ()=>{
  const mainGlide = new Glide(".main__glide", sliderConfiguration); // default options

 useEffect(() => {
    mainGlide.mount();
    // return () => mainGlide.destroy();
  }, [mainGlide]);

return (
  <div className="main__glide">
    <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide bg-red-600 p-16">
         </li>
      </ul>
  </div>
  <div data-glide-el="controls" className="controls">
    <div data-glide-dir="<" id="prev">
        <FaArrowLeft className="controls-arrow" />
    </div>
    <div data-glide-dir=">" id="next">
        <FaArrowRight className="controls-arrow" />
    </div>
</div>
</div>
)
}