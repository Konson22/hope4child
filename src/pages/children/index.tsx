import ChildCard from "components/ChildCard";
import { childInterface } from "util/Types";
import { useChildrenContext } from "contexts/ChildrenContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "components/Dropdown";
import { ageData, statesData } from "assets/data";
import { FiSearch } from "react-icons/fi";
import { ChildSearch } from "components/SearchFilter";
// import { getChildren } from "apis/apis";
// import { useQuery } from "@tanstack/react-query"


export default function ChildrenPage() {

    const { childrenData } = useChildrenContext()

    const navigate = useNavigate()
    const [selectedState, setSelectedState] = useState<string>('All States');
    const [selectedGender, setSelectedGender] = useState<string>('Either');
    const [selectedAge, setSelectedAge] = useState<string>('All ages');

    const handleSearch = () => { 
        let query = []
        if(selectedState && selectedState !== 'All States'){
            query.push(`state=${selectedState}`)
        }
        if(selectedGender && selectedGender !== 'Either'){
            query.push(`gender=${selectedGender}`)
        }
        if(selectedAge && selectedAge !== 'All ages'){
            query.push(`age=${selectedAge}`)
        }
        navigate(`/search?${query.join('&')}`)
    }
   
    const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

  return (
    <>
    <div 
        className="md:px-[20%] px-4 md:pt-[7rem] pt-[3rem] pb-[8rem] text-white"
        style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`, 
            backgroundSize:'cover', 
            backgroundPosition:'center'
        }}
    >
        <div className="md:w-[80">
            <h2 className="md:text-6xl text-4xl font-bold">
                Realizing <span className="text-rose-600">street</span> children’s right to <span className="text-rose-600">education</span></h2>
           
        </div>
    </div>
    <div className="px-[3%] py-4 mt-[-6rem]">
        <div className="flex justify-center">
            <div className="rounded text-whitee bg-gradient-to-tl from-sky-100 to-cyan-100 md:px-20 px-4 py-12">
                <div className="md:flex md:w-auto w-full">
                    <ChildSearch 
                        selectedGender={selectedGender} 
                        setSelectedGender={setSelectedGender} 
                        cName="w-[31%]"
                    />
                    {/* <ChildSearch 
                        selectedGender={selectedGender} 
                        setSelectedGender={setSelectedGender} 
                        cName="flex-1 md:mx-2 mx-1"
                    /> */}
                    <div className="flex md:mx-6 md:my-0 my-6">
                        <div className="md:flex-none flex-1 md:mr-3">
                            <span className="block mb-1">Choose State</span>
                            <Dropdown 
                                data={selectedAge} 
                                handleChange={setSelectedAge} 
                                dataArray={ageData} 
                                cName="flex-1 mx-1" 
                            />
                        </div>
                        <div className="md:flex-none flex-1">
                            <span className="block mb-1">Choose State</span>
                            <Dropdown 
                                data={selectedState} 
                                handleChange={setSelectedState} 
                                dataArray={statesData} 
                                cName="flex-1 mx-1" 
                            />
                        </div>
                    </div>
                    <div className="md:mr-3">
                        <span className="block mb-1">Match child</span>
                        <button 
                            className="
                                w-full flex items-center justify-center bg-rose-600 text-white
                                rounded px-5 py-2
                            "
                            onClick={handleSearch}
                        >
                            <FiSearch className="text-xl mr-2" />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:px-0 mx-2 my-10">
            <div className="flex items-center justify-between mb-7">
                <span className="text-2xl">Results 120</span>
                <div className="px-3 py-1 border">Sort by</div>
            </div>
            {(childrenData && childrenData.length >= 1) &&
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {childrenData.map((child: childInterface) => <ChildCard child={child} bg="bg-slate-50" />)}
                </div>
            }
            {/* {(qieryResult.isSuccess && qieryResult.data?.data) &&
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {qieryResult.data?.data.map((child: childInterface) => <ChildCard child={child} />)}
                </div>
            } */}
        </div>
    </div>
    </>
  )
}



function LoaderCard(){
    return(
      <div className="grid md:grid-cols-4 grid-cols-1 gap-x-3 gap-y-6 md:mt-16 mt-8 md:px-0 px-5">
        {[...new Array(10)].map((_, item) => (
          <div className="bg-gray-50" key={item}>
            <img className="h-[210px]" 
                src={process.env.PUBLIC_URL+'/images/placeholder-large.png'} 
                alt="" 
            />
            <div className="px-3 py-2">
                <span className="h-2 w-[60%] bg-gray-200 block mt-2"></span>
                <span className="h-1 w-[90%] bg-gray-200 block mt-2"></span>
                <span className="h-1 w-[80%] bg-gray-200 block mt-2"></span>
                <span className="h-1 w-[80%] bg-gray-200 block mt-2"></span>
                <div className="flex items-center justify-between mt-7">
                    <span className="h-7 w-7 rounded-full bg-gray-200 block"></span>
                    <div className="flex items-center">
                        <span className="md:h-7 h-4 md:w-18 w-16 bg-gray-200 block rounded mr-3"></span>
                        <span className="md:h-7 h-4 md:w-18 w-16 bg-gray-200 block rounded"></span>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  