import ChildCard from "components/ChildCard";
import { AgeDropdown } from "components/dropdown/AgeDropdown";
import { GenderDropdown } from "components/dropdown/GenderDropdown";
import { StateDropdown } from "components/dropdown/StateDropdown";
import { useState } from "react";
import { childInterface } from "util/Types";
import { useQuery } from "@tanstack/react-query"
import { getChildren } from "apis/apis";
import { FiSearch } from "react-icons/fi";


export default function ChildrenPage() {

    const qieryResult = useQuery({
        queryKey:['posts'],
        queryFn:getChildren
    })


    // if(qieryResult.isLoading){
    //     return <LoaderCard />
    // }
  

  return (
    <div className="px-[3%] py-4">
        <div className="md:flex items-center justify-between">
            <div className="flex-1 md:mb-0 mb-4">
                <h3 className='md:text-2xl ttext-xl'>Fine a child to sponsor</h3>
            </div>
            <div className="">
                <div className="flex items-center h-[3rem] md:w-[500px] bg-slate-100 rounded overflow-hidden">
                    <input className="h-full bg-transparent " 
                        type="search" 
                        placeholder="Search by Name/state"
                    />
                    <button className="h-full flex items-center md:bg-rose-600 md:text-white text-rose-600 px-3">
                        <FiSearch className="text-2xl" />
                        <span className="md:block hidden">Search</span>
                    </button>
                </div>
            </div>
            {/* <div className="flex items-center">
                <GenderDropdown selectedGender={selectedGender} setSelectedGender={setSelectedGender} cName='bg-slate-100' />
                <AgeDropdown selectedAge={selectedAge} setSelectedAge={setSelectedAge} cName='md:mx-3 mx-1' />
                <StateDropdown selectedState={selectedState} setSelectedState={setSelectedState} cName='bg-slate-100' />
                <div className="ml-1">
                    <span className="block mb-1">Search</span>
                    <button className="bg-rose-600 border border-rose-600 text-white rounded px-4 py-2">
                        Find
                    </button>
                </div>
            </div> */}
        </div>
        <div className="md:px-0 mx-2 my-10">
            <div className="flex items-center justify-between mb-7">
                <span className="text-2xl">Results 120</span>
                <div className="px-3 py-1 border">Sort by</div>
            </div>
            {(qieryResult.isSuccess && qieryResult.data?.data) &&
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {qieryResult.data?.data.map((child: childInterface) => <ChildCard child={child} />)}
                </div>
            }
        </div>
    </div>
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
  