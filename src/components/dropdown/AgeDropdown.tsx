import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"


interface ageProps {
  selectedAge:{min:number; max:number};
  cName?:string;
  setSelectedAge:React.Dispatch<React.SetStateAction<{min:number; max:number}>>
}


export function AgeDropdown({ selectedAge, setSelectedAge, cName } : ageProps){

    const [isOpen, setIsOpen] = useState(false)
  
    return(
      <div className={`relative ${cName}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="block mb-1">Age</span>
        <div 
          className={` bg-slate-100
            flex items-center justify-between px-4 py-2
            cursor-pointer hover:bg-cyan-500 hover:text-white
            border rounded
          `}
        >
          {selectedAge.min} - 
          {selectedAge.max}
          <FiChevronDown className={`duration-300 ml-2 ${isOpen ? 'rotate-[180deg]':''}`} />
        </div>
        {isOpen &&
          <div className="w-full rounded text-slate-700  z-40 bg-slate-100 shadow-sm absolute left-0 top-full">
            {ageData.map((age) => (
              <div 
                className="hover:bg-rose-500 px-5 py-2 border-t border-b"
                key={age.max}
                onClick={() => setSelectedAge({min:age.min, max:age.max})}
              >{age.min} - {age.max}</div>
            ))}
          </div>
        }
      </div>
    )
}


const ageData = [
    {min:4, max:8},
    {min:4, max:8},
    {min:4, max:8},
]