<<<<<<< HEAD
import { ageData, genderData, statesData } from "../../assets/data"
import ChildCard from "../../components/ChildCard"
import { AgeDropdown, Dropdown } from "../../components/Dropdown"
import { useChildrenContext } from "../../contexts/ChildrenContextProvider"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { childInterface } from "../../util/Types"
=======
import { ageData, genderData, statesData } from "assets/data"
import ChildCard from "components/ChildCard"
import { AgeDropdown, Dropdown } from "components/Dropdown"
import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { childInterface } from "util/Types"
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25


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
            {childrenData.map((child:childInterface) => <ChildCard child={child} />)}
        </div>
    </div>
  )
}
