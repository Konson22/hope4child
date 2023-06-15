// import { statesData } from "assets/data"
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"
import { stateSearchProps } from "util/Types";


  
export function StateDropdown({ selectedState, setSelectedState, data, cName } : stateSearchProps){

  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className='md:my-4 my-0 flex-1 relative' onClick={() => setIsOpen(!isOpen)}>
      <span className="block mb-1">State</span>
      <div 
        className={`
          flex items-center justify-between px-4 py-2
          cursor-pointer hover:bg-cyan-500 hover:text-white
          border rounded ${cName}
        `}
      >
        {selectedState}
        <FiChevronDown className="ml-2" />
      </div>
      {isOpen &&
        <div className="md:w-[150px] w-full h-[300px] overflow-y-scroll rounded text-slate-700  z-20 bg-white absolute left-0 top-full">
          {data.map((state:string) => (
            <div 
              className="hover:bg-rose-500 px-4 py-2 border-t border-b"
              key={state}
              onClick={() => setSelectedState(state)}
            >{state}</div>
          ))}
        </div>
      }
    </div>
  )
}


