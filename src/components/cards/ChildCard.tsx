import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "components/Buttons";

interface CardProps {
  child:{
    id:string;
    name:string;
    gender:string;
    age:number;
    avatar:string;
  }
}

export const ChildCard:React.FC<CardProps> = ({ child }) => {
  return (
    <div className="bg-slate-100 border rounded overflow-hidden">
      <img className="md:h-[200px] h-[150px] w-full" src={child.avatar} alt="" />
      <div className="p-3">
        <h3 className="md:text-xl font-bold">{child.name}</h3>
        <span>{child.age} old, {child.gender}, from Juba</span>
        <p className="line-clamp-2">
          Reasons have day were meat dominion they're moving setting great very us hath the
        </p>
        <Button text="Profile" Icon={ChevronRightIcon} cName="w-full flex justify-center bg-rose-400 px- py-2 mt-2" />
      </div>
    </div>
  )
}
