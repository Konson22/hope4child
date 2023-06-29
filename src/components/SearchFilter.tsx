import { useState } from 'react'
import { ageData, genderData, statesData } from 'assets/data';
import { useNavigate } from 'react-router-dom';
import { AgeDropdown, Dropdown } from './Dropdown';
import { childSearchProps } from 'util/Types';

export default function SearchFilter({cName}:{cName:string}) {

    const navigate = useNavigate()
    const [selectedState, setSelectedState] = useState<string>(statesData[0]);
    const [selectedGender, setSelectedGender] = useState<string>(genderData[0]);
    const [selectedAge, setSelectedAge] = useState<{min:number; max:number}>({min:4, max:8});

    const handleSearch = () => { 
        let query: string[] = []

        if(selectedState && selectedState !== 'All States'){
            query.push(`state=${selectedState}`)
        }
        if(selectedGender && selectedGender !== 'Either'){
            query.push(`gender=${selectedGender}`)
        }
        // if(selectedAge && selectedAge !== 'All ages'){
        //     query.push(`age=${selectedAge}`)
        // }
        console.log(`/search?${query.join('&')}`)
        navigate(`/search?${query.join('&')}`)
    }

  return (
        // <div className={`
        //     ${cName}
        //     md:w-[33%] w-full bg-sky-300/10 backdrop-filter backdrop-blur-md shadow-lg
        //     text-white rounded-md 
        //     px-6 py-10 md:ml-10 md:mt-0 text-base z-20
        // `}>
        <div className={`
            ${cName}
            md:w-[33%] w-full bg-main2 backdrop-filter backdrop-blur-md shadow-lg
            text-white rounded-md 
            px-6 py-10 md:ml-10 md:mt-0 text-base z-20
        `}>
            <h3 className="text-2xl font-sembold">Your generosity gives children a smile Sponsor child now</h3>
            <div className="flex mt-4">
                <div className='mr-1'>
                    <span className="block m-1">Gender</span>
                    <Dropdown 
                        data={selectedGender} 
                        handleChange={setSelectedGender} 
                        dataArray={genderData} 
                        cName="w-full" 
                    />
                </div>
                <div className='flex-1 mx-2'>
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
            <button 
                className="w-full py-2 text-white bg-rose-700 rounded mt-10"
                onClick={handleSearch}
            >
            Match your child
            </button>
        </div>
  )
}


export function ChildSearch({ selectedGender, setSelectedGender, cName } : childSearchProps){

    const genderData = ['Either', 'male', 'female']

    return(
        <div className="">
            <span className="block mb-1">I am intrested in</span>
            <div className="flex justify-between">
                {genderData.map((gender:string) => (
                <div 
                    className={`
                        px-5 py-2 border rounded cursor-pointer hover:bg-cyan-600 hover:text-white
                        ${selectedGender === gender ? 'bg-cyan-600 text-white':''} ${cName}
                    `} 
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                >
                    {gender}
                </div>
                ))}
            </div>
        </div>
    )
}
