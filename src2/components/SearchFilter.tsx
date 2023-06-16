import { useState } from 'react'
import { Dropdown } from './dropdown'
import { ChildSearch } from './dropdown/ChildSearch'
import { ageData, statesData } from 'assets/data';
import { useNavigate } from 'react-router-dom';

export default function SearchFilter() {

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
        <div className="md:w-[30%] w-full bg-cyan-500 rounded-md p-6 md:ml-10 md:mt-0 mt-8">
            <h3 className="text-2xl font-bold mb-4">Spanosr a child</h3>
            <ChildSearch selectedGender={selectedGender} setSelectedGender={setSelectedGender} cName="w-[31%]"/>
            <div className="flex mt-6">
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
                className="w-full py-1 text-white bg-yellow-500 rounded mt-6"
                onClick={handleSearch}
            >
            Find
            </button>
        </div>
  )
}
