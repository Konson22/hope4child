import { Title1, Title3 } from "components/HeadingTitle";
import Glide from "@glidejs/glide"
import { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
// import 'node_modules/@glidejs/glide/dist/css/glide.core.min.css'


const sliderConfiguration= {
  gap: 20,
  perView: 1,
  startAt: 0,
  type:'slide'
};


export default function UpcomingEventsSections() {

  const slider = new Glide('.glide', sliderConfiguration);
  
  useEffect(() => {
    return () => slider.mount()
  }, [slider])

  return (
    <>
    <div className="md:block hidden md:px-[8%] px-3 py-[4rem]">
      <Title1 text="Upcoming Event" cName="text-center mb-4" />
      <div className="flex mt-16">
        <img 
          className="md:w-[54%] rounded-md md:mr-6" 
          src={process.env.PUBLIC_URL+'./images/people.jpg'} 
          alt="" 
        />
        <div className="flex-1">
          {[...new Array(3)].map(() => (
            <div className="bg-slate-100 p-6 pr-20 mb-4 relative">
              <span className="text-[.7rem]">TIME: 07.04 AM TO 12.00 AM</span>
              <Title3 text="Clean Water For Child9" />
              <p>
                Hales of firmament beginning seas yielding won void in land Fowl midst had said made of male evening
              </p>
              <div className="bg-green-400 text-white absolute right-0 top-0 rounded-md px-4 py-2">
                <span className="block text-xl font-bold">23</span>
                <span className="block text-sm">Mar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='md:hidden block glide px-3 py-7'>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl">Upcoming Event</h3>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='bg-slate-50 border rounded-full p-2'
            data-glide-dir='<'
          >
            <ChevronLeftIcon className="h-4" />
          </button>
          <button
            className='bg-slate-50 border rounded-full p-2 ml-2'
            data-glide-dir='>'
          >
            <ChevronRightIcon className="h-4" />
          </button>
        </div>
      </div>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {[...new Array(10)].map(() => (
            <li className="bg-slate-100 relative">
              <img 
                className="h-[150px] w-full" 
                src={process.env.PUBLIC_URL+'./images/people.jpg'} 
                alt="" 
              />
              <div className="p-3">
                <h3 className="text-2xl">Clean Water For Child</h3>
                <span className="text-[.7rem]">TIME: 07.04 AM TO 12.00 AM</span>
                <p className="">
                  Hales of firmament beginning seas yielding won void in land Fowl midst had said made of male evening
                </p>
              </div>
              <div className="bg-green-400 text-white absolute right-0 top-0 rounded-md px-4 py-2">
                <span className="block text-xl font-bold">23</span>
                <span className="block text-sm">Mar</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}
