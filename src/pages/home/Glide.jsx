import { useEffect } from 'react'
import Glide from "@glidejs/glide"


export default function MyGlide() {

    const sliderConfiguration = {
        gap: 20,
        perView: 4,
        startAt: 0,
        autoplay: 3000,
        rewind: false,
        type: "carousel",
        // breakpoints: {
        //     1600: {
        //       perView: 2,
        //     },
        //     1100: {
        //       perView: 1,
        //       peek: 80,
        //     },
        // }
    };
    
    const slider = new Glide('.glide', sliderConfiguration);
    
    useEffect(() => {
    return () => slider.mount()
    }, [slider])


  return (
    <div className='px-[8%]'>
    <div className='glide relative'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li className='glide__slide slider h-40 bg-red-300'>1</li>
            <li className='glide__slide slider h-40 bg-red-300'>2</li>
            <li className='glide__slide slider h-40 bg-red-300'>3</li>
            <li className='glide__slide slider h-40 bg-red-300'>4</li>
          </ul>
        </div>
        <div className='glide__arrows absolute left-0 top-0' data-glide-el='controls'>
          <button
            className='h-10 w-10 glide__arrow glide__arrow--prev bg-slate-200 rounded-full p-3'
            data-glide-dir='<'
          >
            prev
          </button>
          <button
            className='glide__arrow glide__arrow--next'
            data-glide-dir='>'
          >
            next
          </button>
        </div>
    </div>
    </div>
  )
}
