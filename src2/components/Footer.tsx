import { Heading3 } from "./Heading";
import SocialMedia from "./SocialMedia";


export default function Footer() {
  return (
    <footer className="bg-cyan-700 text-white">
        <div className="flex justify-end md:px-[10%] px-4 md:py-[1.5rem] py-6">
            <SocialMedia cName="text-3xl" />
        </div>
        <div className="md:flex justify-between bg-sky-600 md:px-[10%] px-4 md:py-[2.5rem] py-6">
            <div className="">
                <Heading3 text="Ways to Give" />
                <ul>
                    <li className="my-2">Sponsor a Child</li>
                    <li className="my-2">Ways to Donate</li>
                    <li className="my-2">Disaster Relief</li>
                    <li className="my-2">Meet Critical Needs</li>
                    <li className="my-2">Donate Crypto</li>
                </ul>
            </div>
            <div className="md:my-0 my-7">
                <Heading3 text="Ways to Give" />
                <ul>
                    <li className="my-2">Sponsor a Child</li>
                    <li className="my-2">Ways to Donate</li>
                    <li className="my-2">Disaster Relief</li>
                    <li className="my-2">Meet Critical Needs</li>
                    <li className="my-2">Donate Crypto</li>
                </ul>
            </div>
            <div className="">
                <Heading3 text="Ways to Give" />
                <ul>
                    <li className="my-2">Sponsor a Child</li>
                    <li className="my-2">Ways to Donate</li>
                    <li className="my-2">Disaster Relief</li>
                    <li className="my-2">Meet Critical Needs</li>
                    <li className="my-2">Donate Crypto</li>
                </ul>
            </div>
            <div className="md:mt-0 mt-7">
                <Heading3 text="Quick Links" />
                <ul>
                    <li className="my-2">Contact Us</li>
                    <li className="my-2">Careers</li>
                    <li className="my-2">Estate and Asset Giving</li>
                    <li className="my-2">Press Center</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
