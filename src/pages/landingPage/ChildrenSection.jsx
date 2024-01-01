import childrenData from "../../assets/childrenData.json";
import { Heading1 } from "../../util/HeadingTitles";

export default function ChildrenSection() {
  return (
    <div className="px-[10%] my-16">
      <Heading1 text="Children waiting for sponsorship" cName="text-center" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10">
        {childrenData.slice(0, 6).map((child) => (
          <div className="bg-white rounded-md overflow-hidden shadow-md shadow-black/20">
            <div className="bg-primary text-white text-center py-2">
              Waited for 85 days
            </div>
            <img className="md:h-[270px] h-[200px]" src={child.image} alt="" />
            <div className="p-4">
              <span className="">Name: {child.name}</span>
              <p className="">Gender: {child.gender}</p>
              <p className="">Age: {child.age}</p>
            </div>
            <div className="bg-primary text-white text-center py-2">
              Sponsor me
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
