import { FiChevronDown, FiSearch } from "react-icons/fi"
import { useState } from "react"
import { useChildrenContext } from "../../contexts/ChildrenContextProvider";
import { statesData } from "../../assets/data";
import ChildCard from "../../components/ChildCard";


export default function ChildrenPage() {

  const { childrenData } = useChildrenContext()
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('All States');

  return (
    <div className="md:px-[5%] px-3">
      <div className="md:flex items-center justify-between my-6">
        <div className="md:flex hidden">
          <span className="px-3 bg-white runded">All States</span>
        </div>
        <div className="flex h-[3rem] rounded">
          <div 
            className="flex items-center bg-white px-3 border-r cursor-pointer relative" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedState}
            <FiChevronDown className="ml-2" />
            <div className={`bg-gray-100 w-[200px] absolute left-0 top-[100%] z-30 rounded ${isOpen ? '':'hidden'}`}>
              {statesData.map(state => (
                <div 
                  className="px-3 py-1 hover:bg-primary hover:text-white"
                  onClick={() => setSelectedState(state)}
                >
                  {state}
                </div>
              ))}
            </div>
          </div>
          <div className="flex bg-white md:w-[500px] flex-1">
            <input className='h-full w-full' type="text" />
            <button className="flex items-center md:bg-rose-600 md:text-white text-rose-600 px-3 py-1">
              <FiSearch className="text-2xl" />
              <span className="md:block hidden">Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {childrenData.map(child => <ChildCard child={child} />)}
      </div>
    </div>
  )
}
