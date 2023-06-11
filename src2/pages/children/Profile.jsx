import { useChildrenContext } from "contexts/ChildrenContextProvider"
import SponsorForm from "pages/forms/SponsorForm"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function Profile() {

  const { profileId } = useParams()
  const { isLoading, childrenData } = useChildrenContext()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if(childrenData.length > 0){
      const result = childrenData.filter(child => child.id === parseInt(profileId))[0]
      result && setProfile(result)
    }
  }, [profileId])


  return (
    <div className="bg-slate-100 px-[8%] py-8">
      {!profile ?
        <div className="">Loading...</div>:
        <>
        {/* <h2 className="text-3xl text-bold mb-6">{profile.name}'s Profile</h2> */}
        <div className="flex">
          <div className="w-[40%] mr-6">
          <img className="h-[300px] w-full rounded-md" src={`http://localhost:3001/${profile.image}`} alt="" />
          </div>
          <div className="flex-1">
            <span className="text-2xl font-bold block mb-1">Who is {profile.name}?</span>
            <p>
              <span className="font-bold">
                <span className="text-rose-500 font-semibold">{profile.name} </span> is a{profile.name} is a {profile.age} years old {profile.gender}, from Juba
              </span>
              The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being
            </p>
            <div className="my-6">
                <span className="text-2xl font-bold mb-2">{profile.name}'s dream</span>
                <p>
                  The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being
                </p>
              </div>
              <div className="mt-6">
                <span className="text-2xl font-bold mb-2">What {profile.name} need to acheave is dream</span>
                <p>
                  The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being
                </p>
              </div>
          </div>
        </div>
        {/* <div className="flex">
          <div className="w-[55%] mr-6">
            <img className="h-[350px] w-full border" src={profile.avatar} alt="" />
            <div className="flex-1">
              <div className="text-2xl font-semibold my-3">
                <span className="text-rose-500">{profile.name} </span>
                is a{profile.name} is a
                {profile.age} years old {profile.gender}, from Juba
              </div>
              <div className="">
                <span className="text-2xl font-bold mb-2">About {profile.name}</span>
                <p>
                  The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being
                </p>
              </div>
              <div className="my-6">
                <span className="text-2xl font-bold mb-2">{profile.name}'s dream</span>
                <p>
                  The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being
                </p>
              </div>
              <div className="mt-6">
                <span className="text-2xl font-bold mb-2">What {profile.name} need to acheave is dream</span>
                <p>
                  The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <SponsorForm />
          </div>
        </div> */}
        </>
      }
    </div>
  )
}
