

export default function ChildCard({ child }) {
  return (
    <div className="bg-white">
        <div className="h-[220px]">
            <img src={child.image} alt="" />
        </div>
        <div className="p-3">
            <h4 className="ttext-xl font-bold">{child.name}</h4>
            <div className="flex">
                <p>Gender: {child.gender}</p>
                <p>Age: {child.age}</p>
            </div>
            <p>Location: {child.address}</p>
            <button className="bg-rose-600 text-white rounded px-4 py-1 mt-3">Sponsor</button>
        </div>
    </div>
  )
}
