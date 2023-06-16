import ChildCard from "components/ChildCard";
import { useChildrenContext } from "contexts/ChildrenContextProvider";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { childInterface } from "util/Types";


export default function SponsorPage() {

    const { isLoading, childrenData } = useChildrenContext()

  return (
    <div className="px-[3%] py-4">
        <div className="md:flex items-center justify-between">
            <div className="flex-1">
                <h3 className='text-2xl'>Sponsor child</h3>
            </div>
            <div className="md:flex items-center">
                <div className="md:block hidden">
                    <span className="block m-1">I am intrested in</span>
                    <div className="flex items-center">
                        <div className="border border-cyan-500 rounded-md px-5 py-2">Girl</div>
                        <div className="border border-cyan-500 rounded-md px-5 py-2 mx-3">Boy</div>
                        <div className="border border-cyan-500 rounded-md px-5 py-2">Either</div>
                    </div>
                </div>
                <div className="flex md:ml-3">
                    <div className="md:hidden block">
                        <span className="block m-1"><span className="md:flex hidden">Select</span> gender</span>
                        <div className="flex items-center border border-cyan-500 rounded-md md:px-5 px-2 py-2">
                            Gender
                            <FiChevronDown className="text-xl ml-1" />
                        </div>
                    </div>
                    <div className="md:mx-4 mx-2 flex-1">
                        <span className="md:block hidden m-1">Select state</span>
                        <span className="md:hidden block m-1">State</span>
                        <div className="flex items-center border border-cyan-500 rounded-md md:px-5 px-2 py-2">
                            All States
                            <FiChevronDown className="text-xl ml-2" />
                        </div>
                    </div>
                    <div className="">
                        <span className="block m-1">Search</span>
                        <button className="flex items-center bg-rose-600 text-white px-4 py-2 rounded">
                            <FiSearch className="text-2xl" />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:px-0 mx-2 my-10">
            <div className="flex items-center justify-between mb-7">
                <span className="text-2xl">Results 120</span>
                <div className="px-3 py-1 border">Sort by</div>
            </div>
            {isLoading && "Loading......"}
            {childrenData.length > 0 && 
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {childrenData.map((child: childInterface) => <ChildCard child={child} />)}
                </div>
            }
        </div>
    </div>
  )
}
