import { statesData } from "../../assets/data";
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
                    options={statesData}
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

    return(
        <div className="rounded border border-dark-teal cursor-pointer mr-2 px-3">
            <select className="py-2 border-none bg-transparent">
                <option className="px-4 py-1">
                    Choose {title}
                </option>
                {options.map(option => (
                    <option className="px-4 py-1">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}