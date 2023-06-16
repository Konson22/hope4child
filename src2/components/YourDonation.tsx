import { Heading1 } from "./Heading";
import { FiHeart } from "react-icons/fi";

export default function YourDonation() {
  return (
    <div className="md:px-[12%] py-[5rem] bg-cyan-600 text-white">
        <Heading1 text="Your Donation will provide Lyam with" cName="text-center" />
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-5 md:gap-y-20 gap-y-10 mt-16">
            {donationData.map(donation => (
                <div className="text-center">
                    <div className="flex justify-center md:mb-8 mb-5">
                        {donation.icon}
                    </div>
                    <h3 className="md:text-xl text-sm md:font-bold">{donation.title}</h3>
                </div>
            ))}
        </div>
        <div className="flex justify-center mt-16">
            <button className="bg-yellow-500 text-white text-xl rounded px-10 py-3">Make donation</button>
        </div>
    </div>
  )
}


const donationData = [
    {
        title:'Individual mentorship and love',
        icon:<FiHeart className="md:text-7xl text-5xl" />
    },
    {
        title:'Education assistance and skills training',
        icon:<FiHeart className="md:text-7xl text-5xl" />
    },
    {
        title:'Medical care and regular checkups',
        icon:<FiHeart className="md:text-7xl text-5xl" />
    },
    {
        title:'Malnutrition monitoring and intervention',
        icon:<FiHeart className="md:text-7xl text-5xl" />
    }
]