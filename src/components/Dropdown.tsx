import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"


interface ageProps {
  data:string;
  cName?:string;
  dataArray:string[];
  hieght?:string;
  handleChange:React.Dispatch<React.SetStateAction<string>>
}


export function Dropdown({ data, handleChange, dataArray, cName, hieght } : ageProps){

    const [isOpen, setIsOpen] = useState(false)
  
    return(
      <div className={`relative ${cName}`} onClick={() => setIsOpen(!isOpen)}>
        {/* <span className="block mb-1">Age</span> */}
        <div 
          className={` 
            flex items-center justify-between md:px-4 px-2 py-2
            cursor-pointer hover:bg-cyan-500
            border rounded
          `}
        >
          {data}
          <FiChevronDown className={`duration-300 md:ml-2 ml-1 ${isOpen ? 'rotate-[180deg]':''}`} />
        </div>
        {isOpen &&
          <div className={`${hieght} w-full rounded text-slate-700  z-40 bg-slate-100 shadow-sm absolute left-0 top-full`}>
            {dataArray.map((currentData:any) => (
              <div 
                className="hover:bg-rose-500 px-5 py-2 border-t border-b"
                key={currentData}
                onClick={() => handleChange(currentData)}
              >{currentData}</div>
            ))}
          </div>
        }
      </div>
    )
}

