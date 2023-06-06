import { statesData } from "assets/data";
import { ChildCard } from "components/cards/ChildCard";
import { useChildrenContext } from "contexts/ChildrenContextProvider";
import { useEffect, useState } from "react";
import { childInterface } from "util/Types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


export default function ChildrenPage() {

  const { isLoading, childrenData } = useChildrenContext()
  const [currentData, setCurrentData] = useState<childInterface[] | null>(
    null
  )
  const [message, setMessage] = useState('')


  useEffect(() => {
    if(!isLoading && childrenData){
      setCurrentData(childrenData)
      if(childrenData.length === 0){
        setMessage("nooo data")
      }else{
        console.log('you have data.....')
      }
    }
  }, [childrenData])
  
 
  // search child by gender
  const searchByGender = (event: string) => {
    if(childrenData){
      if(event === 'either'){
        setCurrentData(childrenData)
      }

      const result = childrenData.filter((child: { gender: any; }) => child.gender === event)

      if(result.length >= 1){
        setMessage('')
        setCurrentData(result)
      }else{
        setCurrentData(null)
        setMessage(`Sorry No child from ${event} found!`)
      }
    }
  }

  // search child by State
  const searchByState = (state: string) => {
    if(childrenData){
      if(state === 'All States'){
        setCurrentData(childrenData)
      }

      const result = childrenData.filter((child: { state: any; }) => child.state === state)

      if(result.length >= 1){
        setMessage('')
        setCurrentData(result)
      }else{
        setCurrentData(null)
        setMessage(`Sorry No child from ${state} found!`)
      }
    }
  }
 
  // SEARCH BY AGE
  const searchByAge = (min: number, max:number) => {
    if(childrenData){
      if(min === 0 && max === 0){
        return setCurrentData(childrenData)
      }

      const result = childrenData.filter((child: { age:number }) => {
        return child.age >= min && child.age <= max
      })
      console.log(result)

      if(result.length >= 1){
        setMessage('')
        setCurrentData(result)
      }else{
        setCurrentData(null)
        setMessage(`No child between age ${min} and ${max} found!`)
      }
    }
  }
  
  const searchBar = (
    <div className="md:h-[2.7rem] h-[3rem] md:w-[400px] bg-white rounded-md border border-cyan-500 flex items-center md:mt-0 mt-3">
      <div className="flex-1">
        <input className="h-full w-full bg-transparent text-white border-none" type="search" />
      </div>
      <div className="md:h-[2.2rem] h-[2.4rem] md:w-[2.2rem] w-[2.4rem] mr-[.3rem] p-2 border bg-slate-200 rounded-full">
        <img className="h-full w-full" src={process.env.PUBLIC_URL+'./images/search.png'} alt="" />
      </div>
    </div>
  )

  return (
    <div className="bg-slate-200">
      <div className="md:flex items-center justify-between md:py-5 py-3 md:px-[5%] px-3">
        <div className="flex-1">
          <h3 className="md:text-3xl text-xl">Sponsor a child</h3>
        </div>
        <div className="md:hidden block">
          {searchBar}
        </div>
        <div className="flex justify-between md:mt-0 mt-4">
          <DropdownSelect data={['Gender', 'male', 'female', 'either']} handler={searchByGender} />
          <DropdownSelect data={['All States', ...statesData]} handler={searchByState} cName='md:mx-4 mx-2' />
          <AgeDropdownSelect 
            data={[
              {min:4, max:8},
              {min:9, max:13},
              {min:14, max:18},
              {min:19, max:23},
            ]} 
            handler={searchByAge} 
          />
        </div>
        <div className="md:block hidden">
          {searchBar}
        </div>
      </div>
      <div className="md:px-[5%] px-3">
        {message && <div className="p-10 text-red-500">{message}</div>}
        {(!currentData && !message) ? <LoaderCard />:
          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-6 md:mt-16 mt-8">
            {currentData && currentData.map((child: childInterface) => <ChildCard key={child.id} child={child} />)}
          </div>
        }
      </div>
    </div>
  )
}


interface DropdownProps {
  cName?:string;
  data:string[];
  handler:(event:string) => void;
}

function DropdownSelect({ data, cName, handler } : DropdownProps){

  const [isOpen, setIsOpen] = useState(false)
  
  return(
    <div className={`flex items-center bg-white border border-cyan-500 rounded-md relative p-2 ${cName}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {data[0]}
      <ChevronDownIcon className="h-4 ml-2" />
      {isOpen &&
        <div className="w-full bg-slate-100 absolute left-0 top-full p-3">
          {data.map(d => (
            <div className="py-2" onClick={() => handler(d)}>{d}</div>
          ))}
        </div>
      }
    </div>
  )
}

interface AgeDropdownProps {
  data:{min:number; max:number}[];
  handler:(min:number, max:number) => void;
}


function AgeDropdownSelect({ data, handler } : AgeDropdownProps){

  const [isOpen, setIsOpen] = useState(false)
  const [selectedAge, setSelectedAge] = useState('All Ages')
  
  const handleSelectAge = (min:number, max:number) => {
    if(min === 0 && max === 0){
      setSelectedAge('All Ages')
    }else{
      setSelectedAge(`${min} to ${max}`)
    }
    handler(min, max)
  }
  return(
    <div className={`flex items-center bg-white border border-cyan-500 rounded-md cursor-pointer relative md:px-4 px-2 py-2`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {selectedAge}
      <ChevronDownIcon className="h-4 ml-2" />
      {isOpen &&
        <div className="w-[100px] bg-slate-100 absolute left-0 top-full p-3">
          <div className="py-2" onClick={() => handleSelectAge(0, 0)}>All ages</div>
          {data.map(d => (
            <div className="py-2" onClick={() => handleSelectAge(d.min, d.max)}>{d.min} to {d.max}</div>
          ))}
        </div>
      }
    </div>
  )
}

// function HeaderSearch(){

//   const searchBar = (
//     <div className="md:h-[2.7rem] h-[3rem] md:w-[400px] bg-white rounded-md border border-cyan-500 flex items-center md:mt-0 mt-3">
//       <div className="flex-1">
//         <input className="h-full w-full bg-transparent text-white border-none" type="search" />
//       </div>
//       <div className="md:h-[2.2rem] h-[2.4rem] md:w-[2.2rem] w-[2.4rem] mr-[.3rem] p-2 border bg-slate-200 rounded-full">
//         <img className="h-full w-full" src={process.env.PUBLIC_URL+'./images/search.png'} alt="" />
//       </div>
//     </div>
//   )

//   return(
//     <div className="md:flex items-center justify-between md:py-5 py-3 md:px-[5%] px-3">
//       <div className="flex-1">
//         <h3 className="md:text-3xl text-xl">Sponsor a child</h3>
//       </div>
//       <div className="md:hidden block">
//         {searchBar}
//       </div>
//       <div className="flex justify-between md:mt-0 mt-4">
//         <DropdownSelect data={['Gender', 'Male', 'Female', 'Either']} />
//         <DropdownSelect data={['State', ...statesData]} />
//         <DropdownSelect data={['Gender', 'Male', 'Female', 'Either']} />
//       </div>
//       <div className="md:block hidden">
//         {searchBar}
//       </div>
//     </div>
//   )
// }


function LoaderCard(){
  return(
    <div className="grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-6 md:mt-16 mt-8">
      {[...new Array(10)].map((_, item) => (
        <div className="" key={item}>
          <div className="h-[200px] bg-gray-100"></div>
        </div>
      ))}
    </div>
  )
}

