import { FiArrowRightCircle } from "react-icons/fi"
import { useChildrenContext } from "../../contexts/ChildrenContextProvider"
import { childInterface } from "../../util/Types"
import Slider from "../../components/Slider"


export default function InspireSection() {

    const { childrenData } = useChildrenContext()

  return (
    <div className="md:px-[5%] px-3 py-[3rem]">
        <div className="text-center md:px-[10%]">
            <h2 className="md:text-5xl text-2xl">World without poprty</h2>
            <p>
                Then there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed themselves and their family. These children often drop out of school and are much more likely to join gangs, steal and become addicted to drugs and alcohol.
            </p>
        </div>
        <Slider title='Get Inspired by these stories' cName='py-[4rem]'>
            {childrenData.map((child:childInterface) => (
                <div className="h-[390px] text-white flex items-end rounded p-4"
                    style={{
                        backgroundImage:`linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(${child.image})`,
                        backgroundSize:'100% 100%'
                    }}
                >
                    <div className="">
                        <h3 className="text-xl text-white">{child.name}</h3>
                        <p className="line-clamp-2">{child.bio}</p>
                        <button className="flex items-center px-4 py-1 mt-3">
                            Read more
                            <FiArrowRightCircle className="text-xl ml-2" />
                        </button>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}
