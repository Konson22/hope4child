import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { ChildCard } from "../../components/ChildCard";
import { useChildren } from "../../contexts/ChildrenContextProvider";


export default function SponsorChild() {

  const { loading, childrenData } = useChildren();

  let childrenConent

  if(loading){
    childrenConent = 'Loading...'
  }else{
    childrenConent = childrenData.length >= 1 ? childrenData.map(child => <ChildCard child={child} />) : 'No Children found!'
  }

  return (
    <>
        <div className="md:flex items-center justify-between md:px-[5%] px-3 py-8 bg-gray-100">
            <h1 className="md:text-3xl font-bold">Choose Children to Sponsor!</h1>
            <div className="flex items-center md:text-base text-sm">
                <Dropdown title='Gender'
                    options={['Either', 'male', 'female']}
                    />
                <Dropdown title='Age' 
                    options={['Either', 'male', 'female']}
                    />
                <Dropdown title='State'
                    options={['Either', 'male', 'female']}
                />
                <button className="flex items-center px-4 py-2 rounded border bg-dark-teal">
                    <span className="md:block hidden">Find </span> Child
                </button>
            </div>
        </div>
        <div className="px-[5%] lg:grid grid-cols-5 gap-4 lg:mt-8 mt-8">
            { childrenConent }
        </div>
    </>
  )
}



function Dropdown({ title, options }){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="flex items-center px-4 py-2 rounded border border-dark-teal cursor-pointer mr-2 relative"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="md:block hidden">Choose</span> {title}
            <FiChevronDown className="ml-1" />
            {isOpen &&
                <div className="absolute top-full right-0 left-0 bg-gray-100 shadow-md rounded z-30">
                    {options.map(option => (
                        <div className="px-4 py-1">
                            {option}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}