import Glide from "@glidejs/glide";
import { Heading3 } from "components/Heading"
import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

  const slider = new Glide('.glide', sliderConfiguration);
  const { childrenData } = useChildrenContext()
  

  useEffect(() => {
    slider.mount()
  }, [slider])

  return (
    <div className='glide relative mt-10'>
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
              <div className="glide__slide slider rounded overflow-hidden shadow-md">
                <img 
                  className="h-[200px] w-full" 
                  src={process.env.PUBLIC_URL+c.image}
                  alt="" 
                  />
                <div className="text-left p-3">
                  <Heading3 text={c.name} />
                  <ul>
                    <li>Birth day: 17-02-2012</li>
                    <li>Waited: 150 days</li>
                  </ul>
                </div>
                <Link className="block bg-rose-500 text-white p-2" to={`/children/profile/${c.id}`}>
                  Sponsor {c.name}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-rose-500 text-white rounded px-5 py-2">Show more</button>
      </div>
    </div>
  )
}
