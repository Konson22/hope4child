import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
// import {  } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <div className="md:px-[8%] px-3 py-[2rem] md:flex justify-between bg-slate-800 text-white">
        <div className="flex-1">
            <span className="text-xl font-semibold">Who are we?</span>
            <p>
                The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being
            </p>
        </div>
        <div className="md:mx-14 md:mt-0 mt-10">
            <span className="text-xl font-semibold">Policy & Privacy</span>
            <ul>
                <li className="flex items-center my-4">
                    About us
                </li>
                <li className="flex items-center my-4">
                    About us
                </li>
                <li className="flex items-center my-4">
                    About us
                </li>
                <li className="flex items-center my-4">
                    About us
                </li>
            </ul>
        </div>
        <div className="md:mt-0 mt-10">
            <span className="text-xl font-semibold">Contacts & addresses</span>
            <ul>
                <li className="flex items-center my-4">
                    <MapPinIcon className='h-5 mr-3' />
                    Stem center, Juba-S.Sudan
                </li>
                <li className="flex items-center my-4">
                    <PhoneIcon className='h-5 mr-3' />
                    0920079070
                </li>
                <li className="flex items-center my-4">
                    <PhoneIcon className='h-5 mr-3' />
                    0920079070
                </li>
                <li className="flex items-center my-4">
                    <PhoneIcon className='h-5 mr-3' />
                    info@hope4child.com
                </li>
            </ul>
        </div>
    </div>
  )
}
