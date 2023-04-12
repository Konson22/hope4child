import { LazyImage } from "../../components/LazyImage"
import { useChildren } from "../../contexts/ChildrenContextProvider"

export default function Sponsorship() {

  const { childrenData } = useChildren()

  return (
    <div className="md:px-[12%] px-3 pb-4">
        <div className="md:w-[80%] m-auto">
            <h2 className="md:text-5xl text-2xl text-dark-teal font-bold mb-3">CURRENT SPONSORSHIP OPPORTUNITIES</h2>
            <p>
                Your $38 per month combined with others allow our partner homes to give a child more than the basic necessities to survive, but the skills and opportunities to thrive as they transition to adulthood.
            </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
            {childrenData.length > 0 && childrenData.slice(0,6).map(child => (
                <div className=" bg-amber-400 border">
                    <LazyImage cName="h-[300px]" src={child.image} alt='' />
                </div>
            ))}
        </div>
        <div className="flex justify-center mt-8">
        <button className="bg-amber-500 md:font-semibold md:text-xl text-white rounded px-4 py-3">View children waiting for sponsorship</button>
        </div>
    </div>
  )
}
