import ChildCard from "components/ChildCard";
import { childInterface } from "util/Types";
import { useChildrenContext } from "contexts/ChildrenContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "components/Dropdown";
import { ageData, genderData, statesData } from "assets/data";
// import { getChildren } from "apis/apis";
// import { useQuery } from "@tanstack/react-query"


export default function ChildrenPage() {

    const { childrenData } = useChildrenContext()

    const navigate = useNavigate()
    const [selectedState, setSelectedState] = useState<string>('All States');
    const [selectedGender, setSelectedGender] = useState<string>('Either');
    const [selectedAge, setSelectedAge] = useState<string>('All ages');

    const handleSearch = () => { 
        navigate(`/search?state=${selectedState}&&gender=${selectedGender}&age=${selectedAge}`)
    }
   
    const bgImage = process.env.PUBLIC_URL+'./images/bg.png'

  return (
    <>
    <div 
        className="md:h-[50vh] h-[35vh]"
        style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${bgImage}')`, 
            backgroundSize:'cover', 
            backgroundPosition:'center'
        }}
    >
    </div>
    <div className="px-[3%] py-4 mt-[-6rem]">
        <div className="md:mx-[10%] md:flex items-center bg-cyan-500 bg-opacity-80 text-white md:p-12 rounded p-5">
            <div className="flex-1 text-2xl md:mr-6">
                Your generosity gives children a smile Sponsor child now
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
                        <Dropdown
                            data={selectedAge} 
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
        <div className="md:px-0 px-3 mx-2 my-10">
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



// function LoaderCard(){
//     return(
//       <div className="grid md:grid-cols-4 grid-cols-1 gap-x-3 gap-y-6 md:mt-16 mt-8 md:px-0 px-5">
//         {[...new Array(10)].map((_, item) => (
//           <div className="bg-gray-50" key={item}>
//             <img className="h-[210px]" 
//                 src={process.env.PUBLIC_URL+'/images/placeholder-large.png'} 
//                 alt="" 
//             />
//             <div className="px-3 py-2">
//                 <span className="h-2 w-[60%] bg-gray-200 block mt-2"></span>
//                 <span className="h-1 w-[90%] bg-gray-200 block mt-2"></span>
//                 <span className="h-1 w-[80%] bg-gray-200 block mt-2"></span>
//                 <span className="h-1 w-[80%] bg-gray-200 block mt-2"></span>
//                 <div className="flex items-center justify-between mt-7">
//                     <span className="h-7 w-7 rounded-full bg-gray-200 block"></span>
//                     <div className="flex items-center">
//                         <span className="md:h-7 h-4 md:w-18 w-16 bg-gray-200 block rounded mr-3"></span>
//                         <span className="md:h-7 h-4 md:w-18 w-16 bg-gray-200 block rounded"></span>
//                     </div>
//                 </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
  