import childrenData from "../../assets/childrenData.json";

export default function ChildrenSection() {
  return (
    <div className="px-[10%] my-16">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {childrenData.slice(0, 6).map((child) => (
          <div className="bg-gray-50 shadow-md">
            <img className="md:h-[270px] h-[200px]" src={child.image} alt="" />
            <div className="p-4">
              <span className="">Name: {child.name}</span>
              <p className="">Gender: {child.gender}</p>
              <p className="">Age: {child.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
