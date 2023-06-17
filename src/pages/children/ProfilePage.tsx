// import { useQuery } from "@tanstack/react-query";
// import { getChild } from "apis/apis";
// import SponsorFeedback from "components/SponsorFeedback";
// import YourDonation from "components/YourDonation";
import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { childInterface } from "util/Types";
import { FaCity, FaMale } from "react-icons/fa";
import { FiUser } from "react-icons/fi";


export default function ProfilePage() {

  const { profileId } = useParams()
 
  const { childrenData } = useChildrenContext()
  const [profile, setProfile] = useState<childInterface | null>(null)
  

  useEffect(() => {
    if(childrenData.length > 0){
      // eslint-disable-next-line eqeqeq
      const user = childrenData.filter((user: any) => user.id == profileId)[0]
      user && setProfile(user)
    }
  }, [])

  return (
    <>
      {profile &&
      <div className="md:flex items-center md:px-[10%] px-5 my-6">
        <div className="md:w-[35%] rounded-md overflow-hidden md:mr-6">
          <img className="md:h-[350px] h-[260px]" src={process.env.PUBLIC_URL+`/${profile.image}`} alt="" />
          <div className="bg-cyan-600 md:font-semibold text-white text-sm md:text-center md:p-3 p-2">
            {profile.name.split(' ')[0]} has been waiting <span className="text-red-700">456</span> days.
          </div>
        </div>
        <div className="flex-1 md:p-5 md:mt-0 mt-4">
            <h3 className="md:text-4xl text-3xl font-bold">{profile.name}</h3>
            {/* <p className="text-[1.3rem] my-2">{profile.name} is a {profile.age} old livs in {profile.state}</p> */}
            <div className="flex justify-between my-6">
                <div className="flex flex-col items-center">
                  <span className="mb-2 flex items-center justify-center md:p-4 p-2 rounded-full bg-slate-100 md:text-4xl text-2xl">
                    <FaCity />
                  </span>
                  <span className="">State: {profile.state}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-2 flex items-center justify-center md:p-4 p-2 rounded-full bg-slate-100 md:text-4xl text-2xl">
                    <FiUser />
                  </span>
                  <span className="">{profile.age} years old</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-2 flex items-center justify-center md:p-4 p-2 rounded-full bg-slate-100 md:text-4xl text-2xl">
                    <FaMale />
                  </span>
                  <span className="">Gender: {profile.gender}</span>
                </div>
            </div>
            <p className="md:mt-4 mt-2">
                {profile.name} is anxiously waiting for a sponsor. He needs your support of $38/month to have new opportunities to learn and grow physically, mentally and spiritually. He needs your support of $38/month to have new opportunities to learn and grow physically, mentally and spiritually.
            </p>
            <div className="mt-8">
                <Link 
                    className="bg-rose-600 text-white md:text-xl text-base rounded px-5 py-2"
                    to={`/sponsor-child/${profile.id}`}
                    >
                    Sponsor {profile.name}
                </Link>
            </div>
        </div>
      </div>
      }
      {/* <YourDonation /> */}
      {/* <SponsorFeedback /> */}
    </>
  )
}
