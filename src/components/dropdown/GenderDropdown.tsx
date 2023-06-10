import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { childSearchProps } from "util/Types"

export function GenderDropdown({ selectedGender, setSelectedGender, cName } : childSearchProps){

  const [isOpen, setIsOpen] = useState(false)
  const genderData = ['Either', 'Boy', 'Girl']

  return(
    <div className='relative' onClick={() => setIsOpen(!isOpen)}>
      <span className="block mb-1">Gender</span>
      <div 
        className={`
          flex items-center justify-between px-4 py-2
          cursor-pointer hover:bg-cyan-500 hover:text-white
          border rounded ${cName}
        `}
      >
        {selectedGender}
        <FiChevronDown className="ml-2" />
      </div>
      {isOpen &&
        <div className="w-full bg-slate-100 shadow-sm rounded text-slate-700  z-20 absolute left-0 top-full">
          {genderData.map((gender:string) => (
            <div 
              className="hover:bg-rose-500 px-4 py-2 border-t border-b"
              key={gender}
              onClick={() => setSelectedGender(gender)}
            >{gender}</div>
          ))}
        </div>
      }
    </div>
  )
}