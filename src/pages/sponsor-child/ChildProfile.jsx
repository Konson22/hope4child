import { Link, useParams } from "react-router-dom"
import { LazyImage } from "../../components/LazyImage"
import { useChildren } from "../../contexts/ChildrenContextProvider"

export default function ChildProofile(){

    const { profileId } = useParams()
    
    const { childrenData } = useChildren()

    const child = childrenData.length >= 1 && childrenData.filter(child => child._id === parseInt(profileId))[0]
    
    
  return(
    <div className='md:flex md:mx-[15%] md:p-[2rem] p-4 bg-gray-100'>
        <div className="md:w-[45%]">
            <LazyImage cName='md:h-[300px] h-[250px] w-full' src={child.image} alt='' />
        </div>
        <div className="flex-1 md:px-5">
            <h2 className="text-4xl font-semibold mb-2">Meet {child?.name}</h2>
            <span className="block text-xl font-semibold">{child?.name} is a {child.age} Years old {child?.gender}, From {child.state} </span>
            <p className="my-3">
                Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good
            </p>
            <h2 className="text-2xl font-semibold mb-2">Personal Details</h2>
            <div className="flex mt-5">
                <Link className="px-3 py-2 rounded bg-amber-500 text-white" to={`/sponsor-child-form/${child._id}`}>Sponsor {child.gender === 'male' ? 'Him' : 'Her'}</Link>
                <Link className="px-3 py-2 rounded bg-amber-500 text-white ml-4" to={`/request-meetup/${child._id}`}>Reguest Meetup</Link>
            </div>
        </div>
    </div>
   )
}
