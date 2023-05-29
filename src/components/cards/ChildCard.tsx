import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "components/Buttons";
import { Title3 } from "components/HeadingTitle";

interface CardProps {
  child:{id:string;
  name:string;
  gender:string;
  age:number;
  avatar:string;}
}
export const ChildCard:React.FC<CardProps> = ({ child }) => {
  return (
    <div className="bg-gray-50 border shadow-md">
      <img className="h-[200px] w-full" src={child.avatar} alt="" />
      <div className="p-3">
        <Title3 text={child.name} cName="text-blue-500" />
        <span>{child.age} old, {child.gender}, from Juba</span>
        <p>
          Reasons have day were meat dominion they're moving setting great very us hath the
        </p>
        {/* <span className="block">Gender: Male</span>
        <span className="block">Age: 15 Years old</span>
        <span className="block">State: Juba, South Sudan</span> */}
        <Button text="Learn more" Icon={ChevronRightIcon} cName="bg-rose-500 px-3 py-2 mt-2" />
      </div>
    </div>
  )
}
