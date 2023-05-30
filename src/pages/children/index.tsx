import { childrenData, statesData } from "assets/data";
import { SelectDropDown } from "components/SelectDropDown";
import { ChildCard } from "components/cards/ChildCard";


export default function ChildrenPage() {

  
  return (
    <div className="bg-slate-200">
      <HeaderSearch />
      <div className="md:px-[5%] px-3">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-6 md:mt-16 mt-8">
        {childrenData.map(child => <ChildCard child={child} />)}
      </div>
      </div>
    </div>
  )
}


function HeaderSearch(){

  const searchBar = (
    <div className="h-[2.7rem] md:w-[400px] bg-white rounded-full flex items-center mt-2">
      <div className="flex-1">
        <input className="h-full w-full bg-transparent text-white border-none" type="search" />
      </div>
      <button className="h-[2.4rem] w-[2.4rem] mr-[.2rem] bg-red-500 md:text-white rounded-full">f</button>
    </div>
  )

  return(
    <div className="md:flex items-center justify-between md:py-5 py-3 md:px-[5%] px-3">
      <div className="flex-1">
        <h3 className="md:text-3xl text-xl">Sponsor a child</h3>
      </div>
      <div className="md:hidden block">
        {searchBar}
      </div>
      <div className="flex justify-between md:mt-0 mt-4">
        <SelectDropDown options={['Gender', 'Male', 'Female', 'Either']} cName="h-[2.7rem] rounded-full bg-slate-50" />
        <SelectDropDown options={['Age', '4 - 8', '9 - 13', '14 - 18', '19 - 23']} cName="h-[2.7rem] rounded-full bg-slate-50 md:mx-4 mx-3" />
        <SelectDropDown options={['State', ...statesData]} cName="h-[2.7rem] rounded-full bg-slate-50 md:mr-4" />
      </div>
      <div className="md:block hidden">
        {searchBar}
      </div>
    </div>
  )
}
