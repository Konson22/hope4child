import { Title1, Title3 } from "components/HeadingTitle";


export default function UpcomingEventsSections() {
  return (
    <div className="md:px-[8%] px-3 py-[4rem]">
        <Title1 text="Upcoming Event" cName="text-center mb-4" />
        <div className="md:flex mt-16">
          <img 
            className="md:w-[54%] rounded-md md:mr-6" 
            src={process.env.PUBLIC_URL+'./images/people.jpg'} 
            alt="" 
          />
        <div className="flex-1">
          {[...new Array(3)].map(() => (
            <div className="bg-slate-100 p-6 pr-20 mb-4 relative">
              <span className="text-[.7rem]">TIME: 07.04 AM TO 12.00 AM</span>
              <Title3 text="Clean Water For Child9" />
              <p>
                Hales of firmament beginning seas yielding won void in land Fowl midst had said made of male evening
              </p>
              <div className="bg-green-400 text-white absolute right-0 top-0 rounded-md px-4 py-2">
                <span className="block text-xl font-bold">23</span>
                <span className="block text-sm">Mar</span>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}
