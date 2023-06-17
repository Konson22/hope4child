import { useState } from 'react'
import { ageData, statesData } from 'assets/data';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import { childSearchProps } from 'util/Types';

export default function SearchFilter({cName}:{cName:string}) {

    const navigate = useNavigate()
    const [selectedState, setSelectedState] = useState<string>('All States');
    const [selectedGender, setSelectedGender] = useState<string>('Either');
    const [selectedAge, setSelectedAge] = useState<string>('All ages');

    const handleSearch = () => { 
        let query: string[] = []

        if(selectedState && selectedState !== 'All States'){
            query.push(`state=${selectedState}`)
        }
        if(selectedGender && selectedGender !== 'Either'){
            query.push(`gender=${selectedGender}`)
        }
        if(selectedAge && selectedAge !== 'All ages'){
            query.push(`age=${selectedAge}`)
        }
        console.log(`/search?${query.join('&')}`)
        navigate(`/search?${query.join('&')}`)
    }

  return (
        <div className={`
            ${cName}
            md:w-[30%] w-full bg-gradient-to-tl from-blue-300 to-cyan-400 md:bg-opacity-10
            text-white backdrop-blur-xl rounded-md 
            px-6 py-10 md:ml-10 md:mt-0
        `}>
            <h3 className="text-2xl font-bold mb-4">Spanosr a child</h3>
            <ChildSearch selectedGender={selectedGender} setSelectedGender={setSelectedGender} cName="w-[31%]"/>
            <div className="flex mt-10">
                <Dropdown 
                    data={selectedState} 
                    handleChange={setSelectedState} 
                    dataArray={statesData} 
                    cName="flex-1 mr-1" 
                />
                <Dropdown
                    data={selectedAge} 
                    handleChange={setSelectedAge} 
                    dataArray={ageData} 
                    cName="flex-1 ml-1" 
                />
            </div>
            <button 
                className="w-full py-2 text-white bg-rose-700 rounded mt-10"
                onClick={handleSearch}
            >
            Match you child
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
