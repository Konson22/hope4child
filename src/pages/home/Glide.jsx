import Glide from "@glidejs/glide"
import { useEffect } from 'react'


const sliderConfiguration= {
    gap: 20,
    perView: 3,
    startAt: 0,
    type: "slider"
};

 export const GlidePage = () => {
    const slider = new Glide('.glide', sliderConfiguration);
  
    useEffect(() => {
      return () => slider.mount()
    }, [slider])
  
    return (
      <>
        {" "}
        <div className='glide px-[8%]'>
          <div className='glide__track' data-glide-el='track'>
            <ul className='glide__slides'>
              <li className='h-[200px] bg-red-300 glide__slide slider'>1</li>
              <li className='h-[200px] bg-red-300 glide__slide slider'>2</li>
              <li className='h-[200px] bg-red-300 glide__slide slider'>3</li>
              <li className='h-[200px] bg-red-300 glide__slide slider'>4</li>
            </ul>
          </div>
          <div className='glide__arrows' data-glide-el='controls'>
            <button
              className='glide__arrow glide__arrow--prev'
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
      </>
    )
  }