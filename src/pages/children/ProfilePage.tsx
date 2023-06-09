import { useChildrenContext } from "../../contexts/ChildrenContextProvider"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { childInterface } from "../../util/Types";
import { FiUser } from "react-icons/fi";
import { GiModernCity } from "react-icons/gi";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import ChildCard from "../../components/ChildCard";


export default function ProfilePage() {

  const { profileId } = useParams()
 
  const { childrenData } = useChildrenContext()
  const [profile, setProfile] = useState<childInterface | null>(null)
  const [relatedChildren, setRelatedChildren] = useState<childInterface[] | null>(null)
  

  useEffect(() => {
    if(childrenData.length > 0){
      // eslint-disable-next-line eqeqeq
      const user = childrenData.filter((user: any) => user.id == profileId)[0]
      user && setProfile(user)
      const relatedChildren = user && childrenData.filter((c:childInterface) => {
        return (c.state === user.state || c.age === user.age) && c.id !== user.id
      })
      relatedChildren && setRelatedChildren(relatedChildren)
    }
  }, [profileId, childrenData])

  return (
    <div className="mx-[5%]">
      {profile ?
      <>
      <div className="md:flex p-5 my-5 bg-gray-100">
        <div className="md:w-[35%] rounded-md overflow-hidden md:mr-6">
          <img className="md:h-[350px] h-[300px]" src={process.env.PUBLIC_URL+`/${profile.image}`} alt="" />
          <div className="bg-cyan-600 md:font-semibold text-white text-sm md:text-center md:p-3 p-2">
            {profile.name.split(' ')[0]} has been waiting <span className="text-red-700">456</span> days.
          </div>
        </div>
        <div className="flex-1 md:p-5 md:mt-0 mt-4">
          <h3 className="md:text-4xl text-3xl font-bold">{profile.name}</h3>
          <div className="flex justify-between my-6">
            <div className="flex flex-col items-center">
              <span className="mb-2 flex items-center justify-center md:p-3 p-2 rounded-full bg-slate-1000 md:text-3xl text-2xl">
                <GiModernCity />
              </span>
              <span className="">Location: {profile.state}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 flex items-center justify-center md:p-3 p-2 rounded-full bg-slate-1000 md:text-3xl text-2xl">
                <FiUser />
              </span>
              <span className="">{profile.age} years old</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 flex items-center justify-center md:p-3 p-2 rounded-full bg-slate-1000 md:text-3xl text-2xl">
                {profile.gender !== 'male' ? <BsGenderFemale /> : <BsGenderMale />}
              </span>
              <span className="">Gender: {profile.gender}</span>
            </div>
          </div>
          <div className="md:mt-4 mt-2">
            <h3 className="md:text-2xl font-bold">Who is {profile.name}?</h3>
            <p className="">
              {profile.name} is anxiously waiting for a sponsor. He needs your support of $38/month to have new opportunities to learn and grow physically, mentally and spiritually. He needs your support of $38/month to have new opportunities to learn and grow physically, mentally and spiritually.
            </p>
          </div>
          <div className="my-7">
            <h3 className="md:text-2xl font-bold mb-2"><span className="border-b-2 border-red-400">Academic</span> Background</h3>
            <p>{profile.name} was a primary four student at Light the nation primary school befor his financial status forced him to street and leave school behind</p>
          </div>
          <div className="">
            <h3 className="md:text-2xl font-bold">How you can Help {profile.name.split(' ')[0]}</h3>
            <p>{profile.name.split(' ')[0]} there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed</p>
          </div>
          <div className="flex md:text-xl text-base mt-8">
            <Link 
              className="bg-cyan-600 text-white rounded md:px-5 px-3 py-3"
              to={`/request-to-connect-with-child/${profile.id}`}
              >
              Support {profile.name.split(' ')[0]}
            </Link>
            <Link 
              className="bg-cyan-600 text-white rounded md:px-5 px-3 py-3 ml-3"
              to={`/request-to-connect-with-child/${profile.id}`}
              >
              Connect with {profile.name.split(' ')[0]}
            </Link>
          </div>
        </div>
      </div> 
      <div className="bg-gray-100 shadow p-5 mt-12">
        <h2 className="text-2xl font-bold">Related Results</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
          {relatedChildren && relatedChildren.map(c => <ChildCard child={c} />)}
        </div>
      </div>
      </>:
      <div className="md:flex items-center md:px-[10%] px-5 my-6">
        <div className="h-[350px] md:w-[35%] bg-gray-100"></div>
        <div className="md:w-[70%] p-6">
          <div className="h-4 rounded bg-gray-200 md:w-[40%] w-[80%] mb-8"></div>
          <div className="flex justify-between my-5">
            <span className="md:p-8 p-5 bg-gray-200 rounded-full"></span>
            <span className="md:p-8 p-5 bg-gray-200 rounded-full"></span>
            <span className="md:p-8 p-5 bg-gray-200 rounded-full"></span>
          </div>
          <div className="h-2 rounded bg-gray-100 w-[100%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[90%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[70%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[90%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[60%] mb-3"></div>
          <div className="h-9 rounded bg-gray-200 w-[30%] mt-4"></div>
        </div>
      </div>
      }
      {/* {profile ?
      <>
      <div className="md:flex md:mx-[6%] mx-5 my-6 p-5 bg-gray-100">
        <div className="md:w-[35%] rounded-md overflow-hidden md:mr-6">
          <img className="md:h-[350px] h-[300px]" src={process.env.PUBLIC_URL+`/${profile.image}`} alt="" />
          <div className="bg-cyan-600 md:font-semibold text-white text-sm md:text-center md:p-3 p-2">
            {profile.name.split(' ')[0]} has been waiting <span className="text-red-700">456</span> days.
          </div>
        </div>
        <div className="flex-1 md:p-5 md:mt-0 mt-4">
          <h3 className="md:text-4xl text-3xl font-bold">{profile.name}</h3>
          <div className="flex justify-between my-6">
            <div className="flex flex-col items-center">
              <span className="mb-2 flex items-center justify-center md:p-3 p-2 rounded-full bg-slate-1000 md:text-3xl text-2xl">
                <GiModernCity />
              </span>
              <span className="">Location: {profile.state}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 flex items-center justify-center md:p-3 p-2 rounded-full bg-slate-1000 md:text-3xl text-2xl">
                <FiUser />
              </span>
              <span className="">{profile.age} years old</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 flex items-center justify-center md:p-3 p-2 rounded-full bg-slate-1000 md:text-3xl text-2xl">
                {profile.gender !== 'male' ? <BsGenderFemale /> : <BsGenderMale />}
              </span>
              <span className="">Gender: {profile.gender}</span>
            </div>
          </div>
          <div className="md:mt-4 mt-2">
            <h3 className="md:text-2xl font-bold">Who is {profile.name}?</h3>
            <p className="">
              {profile.name} is anxiously waiting for a sponsor. He needs your support of $38/month to have new opportunities to learn and grow physically, mentally and spiritually. He needs your support of $38/month to have new opportunities to learn and grow physically, mentally and spiritually.
            </p>
          </div>
          <div className="my-7">
            <h3 className="md:text-2xl font-bold mb-2"><span className="border-b-2 border-red-400">Academic</span> Background</h3>
            <p>{profile.name} was a primary four student at Light the nation primary school befor his financial status forced him to street and leave school behind</p>
          </div>
          <div className="">
            <h3 className="md:text-2xl font-bold">How you can Help {profile.name.split(' ')[0]}</h3>
            <p>{profile.name.split(' ')[0]} there are the children who have a home but work on the streets as their only means of income. They beg, steal or perform small jobs like shoe-shining or selling items in the market to feed</p>
          </div>
          <div className="flex md:text-xl text-base mt-8">
            <Link 
              className="bg-cyan-600 text-white rounded md:px-5 px-3 py-3"
              to={`/request-to-connect-with-child/${profile.id}`}
              >
              Support {profile.name.split(' ')[0]}
            </Link>
            <Link 
              className="bg-cyan-600 text-white rounded md:px-5 px-3 py-3 ml-3"
              to={`/request-to-connect-with-child/${profile.id}`}
              >
              Connect with {profile.name.split(' ')[0]}
            </Link>
          </div>
        </div>
      </div> 
      <div className="px-[5%] mt-12">
        <h2 className="text-2xl font-bold">Related Results</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
          {relatedChildren && relatedChildren.map(c => <ChildCard child={c} />)}
        </div>
      </div>
      </>:
      <div className="md:flex items-center md:px-[10%] px-5 my-6">
        <div className="h-[350px] md:w-[35%] bg-gray-100"></div>
        <div className="md:w-[70%] p-6">
          <div className="h-4 rounded bg-gray-200 md:w-[40%] w-[80%] mb-8"></div>
          <div className="flex justify-between my-5">
            <span className="md:p-8 p-5 bg-gray-200 rounded-full"></span>
            <span className="md:p-8 p-5 bg-gray-200 rounded-full"></span>
            <span className="md:p-8 p-5 bg-gray-200 rounded-full"></span>
          </div>
          <div className="h-2 rounded bg-gray-100 w-[100%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[90%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[70%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[90%] mb-3"></div>
          <div className="h-2 rounded bg-gray-100 w-[60%] mb-3"></div>
          <div className="h-9 rounded bg-gray-200 w-[30%] mt-4"></div>
        </div>
      </div>
      } */}
    </div>
  )
}
