// import { useQuery } from "@tanstack/react-query";
// import { getChild } from "apis/apis";
import SponsorFeedback from "components/SponsorFeedback";
import YourDonation from "components/YourDonation";
import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { childInterface } from "util/Types";


export default function ChildProfile() {

  const { profileId } = useParams()
  // const qieryResult = useQuery({
  //   queryKey:['posts', profileId],
  //   queryFn:() => getChild(profileId)
  // })

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
      <div className="md:flex items-center md:px-[15%] px-3 my-6">
        <div className="flex-1 rounded-md overflow-hidden md:mr-6">
          <img className="md:h-[400px] h-[260px]" src={process.env.PUBLIC_URL+`/${profile.image}`} alt="" />
          <div className="bg-cyan-300 md:font-semibold text-white text-sm md:text-center md:p-3 p-2">
            {profile.name.split(' ')[0]} has been waiting <span className="text-red-700">456</span> days for a sponsor.
          </div>
        </div>
        <div className="flex-1 md:p-5 md:mt-0 mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left"><h3 className="md:text-4xl text-3xl font-bold">{profile.name}</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="md:mt-4 mt-2">
                    {profile.name} is anxiously waiting for a sponsor. He needs your support of $38/month to have new opportunities to learn and grow physically, mentally and spiritually.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="my-5">
            <tr>
              <td className="py-1 pr-6 font-semibold">AGE:</td>
              <td className="py-1">{profile.age}</td>
            </tr>
            <tr>
              <td className="py-1 pr-6 font-semibold">BIRTHDAY:</td>
              <td className="py-1">October 7, 2020</td>
            </tr>
            <tr>
              <td className="py-1 pr-6 font-semibold">GENDER:</td>
              <td className="py-1">{profile.gender}</td>
            </tr>
            <tr>
              <td className="py-1 pr-6 font-semibold">LOCATION:</td>
              <td className="py-1">{profile.state}</td>
            </tr>
          </table>
          <Link 
            className="bg-rose-600 text-white md:text-xl text-base rounded px-5 py-2"
            to={`/sponsor-child/${profile.id}`}
          >
            Sponsor {profile.name}
          </Link>
        </div>
      </div>
      }
      <YourDonation />
      <SponsorFeedback />
    </>
  )
}
