import { ageData, genderData, statesData } from "assets/data"
import { AgeDropdown, Dropdown } from "components/Dropdown"
import { LazyImage } from "components/LazyImage"
import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function ChildrenPage() {

    const { childrenData } = useChildrenContext()

    const navigate = useNavigate()
    const [selectedState, setSelectedState] = useState<string>('All States');
    const [selectedGender, setSelectedGender] = useState<string>('Either');
    const [selectedAge, setSelectedAge] = useState<{min:number; max:number}>({min:4, max:8});

    const handleSearch = () => { 
        navigate(`/search?state=${selectedState}&&gender=${selectedGender}&age=${selectedAge}`)
    }
  return (
    <div className="px-[5%]">
        <div className="md:flex items-center md:my-7">
            <div className="flex-1 md:text-3xl md:mr-6">
                Choos a children to Sponsor now
            </div>
            <div className="md:flex">
                <div className="flex md:my-0 my-6">
                    <div className='md:mr-1'>
                        <span className="block m-1">Gender</span>
                        <Dropdown 
                            data={selectedGender} 
                            handleChange={setSelectedGender} 
                            dataArray={genderData} 
                            cName="w-full" 
                        />
                    </div>
                    <div className='flex-1 md:mx-2 mx-1'>
                        <span className="block m-1">State</span>
                        <Dropdown 
                            data={selectedState} 
                            handleChange={setSelectedState} 
                            dataArray={statesData} 
                            cName="w-full" 
                            hieght='h-[180px] overflow-y-scroll'
                        />
                    </div>
                    <div className='flex-'>
                        <span className="block m-1">Age</span>
                        <AgeDropdown
                            data={`${selectedAge.min} - ${selectedAge.max}`}
                            handleChange={setSelectedAge} 
                            dataArray={ageData} 
                            cName="w-full" 
                        />
                    </div>
                </div>
                <div className='md:ml-3 ml-0'>
                    <span className="md:block hidden m-1">Search</span>
                    <button 
                        className="md:w-auto w-full px-5 py-2 text-white bg-rose-700 rounded"
                        onClick={handleSearch}
                    >
                        Match your child
                    </button>
                </div>
            </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-12">
            {childrenData.map((child:any) => (
                <div className="bg-gray-100" key={child.id}>
                    <div className="h-[200px] relative">
                        <LazyImage src={child.image} alt="" />
                        <span className="bg-main text-white absolute bottom-0 px-5 py-1">
                            Waiting
                        </span>
                    </div>
                    <div className="p-3">
                        <h3 className="text-xl font-bold">{child.name}</h3>
                        <ul className="text-s">
                            <li className="flex items-center">
                                Gender: <span className="h-[2px] block mx-2 bg-gray-300 flex-1"></span> 
                                {child.gender}
                            </li>
                            <li className="flex items-center">
                                Age: <span className="h-[2px] block mx-2 bg-gray-300 flex-1"></span> 
                                {child.age} Years old
                            </li>
                            <li className="flex items-center">Location: <span className="h-[2px] block mx-2 bg-gray-300 flex-1"></span> {child.state}</li>
                        </ul>
                        {/* <p className="line-clamp-2">{child.bio}</p> */}
                        <div className="flex mt-4">
                            <Link className="bg-main text-white rounded px-3 py-1 text-[16px] mr-2" to={`/profile/${child.id}`}>
                                Profile
                            </Link>
                            <Link className="bg-main text-white rounded px-3 py-1 text-[16px]" to={`/sponsor/${child.id}`}>
                                Sponsor {child.name.split(' ')[0]}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
