import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
// import {  } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <div className="md:px-[8%] px-3 py-[2rem] md:flex justify-between bg-cyan-600 text-white">
        <div className="">
            <span className="text-xl font-semibold">Policy & Privacy</span>
        </div>
        <div className="">
            <span className="text-xl font-semibold">Policy & Privacy</span>
        </div>
        <div className="">
            <span className="text-xl font-semibold">Policy & Privacy</span>
        </div>
        <div className="">
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
            </ul>
        </div>
    </div>
  )
}
