import { useParams } from "react-router-dom"
import { LazyImage } from "../../components/LazyImage"
import { useChildren } from "../../contexts/ChildrenContextProvider"

export default function ChildProofile(){

    const { profileId } = useParams()
    
    const { childrenData } = useChildren()

    const child = childrenData.length >= 1 && childrenData.filter(child => child._id === parseInt(profileId))[0]
    
    
  return(
    <div className='md:flex md:mx-[15%] md:p-[2rem] p-4  bg-gray-100'>
        <div className="md:w-[45%]">
            <LazyImage cName='md:h-[300px] h-[250px] w-full' src={child.image} alt='' />
        </div>
        <div className="flex-1 md:px-5">
            <h2 className="text-4xl font-semibold mb-2">Meet {child?.name}</h2>
            <p className="my-3">
                Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good
            </p>
            <h2 className="text-2xl font-semibold mb-2">Personal Details</h2>
            <table>
                <tr>
                    <td className="py-1 pr-3">Name:</td>
                    <td className="py-1 pr-3">{child?.name}</td>
                </tr>
                <tr>
                    <td className="py-1 pr-3">Gender:</td>
                    <td className="py-1 pr-3">{child?.gender}</td>
                </tr>
                <tr>
                    <td className="py-1 pr-3">Birth Date:</td>
                    <td className="py-1 pr-3">{child?.name}</td>
                </tr>
                <tr>
                    <td className="py-1 pr-3">Age:</td>
                    <td className="py-1 pr-3">{child?.name}</td>
                </tr>
                <tr>
                    <td className="py-1 pr-3">State:</td>
                    <td className="py-1 pr-3">{child?.state}</td>
                </tr>
                <tr>
                    <td className="py-1 pr-3">Address:</td>
                    <td className="py-1 pr-3">{child?.address}</td>
                </tr>
                <tr>
                    <td className="py-1 pr-3">Parent Contact:</td>
                    <td className="py-1 pr-3">0922229042</td>
                </tr>
            </table>
            <div className="flex mt-5">
                <button className="px-3 py-2 rounded bg-amber-500 text-white">Sponsor Child</button>
                <button className="px-3 py-2 rounded bg-amber-500 text-white ml-4">Reguest Meetup</button>
            </div>
        </div>
    </div>
   )
}
