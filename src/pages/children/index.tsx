import { childrenData, statesData } from "assets/data";
import { SelectDropDown } from "components/SelectDropDown";
import { ChildCard } from "components/cards/ChildCard";


export default function ChildrenPage() {

  return (
    <div className="px-[8%]">
      <div className="flex  items-center my-6">
        <div className="">
          <span>Gender</span>
          <SelectDropDown options={['Male', 'Female', 'Either']} cName="h-[2.7rem] bg-slate-50" />
        </div>
        <div className="mx-5">
          <span>Age between</span>
          <SelectDropDown options={['4 - 8', '9 - 13', '14 - 18', '19 - 23']} cName="h-[2.7rem] bg-slate-50" />
        </div>
        <div className="mr-5">
          <span>Location</span>
          <SelectDropDown options={statesData} cName="h-[2.7rem] bg-slate-50" />
        </div>
        <div className="flex-1">
          <span>or Search</span>
          <div className="h-[2.7rem] flex rounded-md overflow-hidden border border-slate-300">
            <input className="h-full w-full bg-white border-none" type="search" />
            <button className="px-3 bg-rose-500 text-white">Search</button>
          </div>
        </div>
      </div>
       <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-10 mt-16">
        {childrenData.map(child => <ChildCard child={child} />)}
      </div>
    </div>
  )
}

