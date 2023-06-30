import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useParams } from "react-router-dom"
import FormInput from "./FormInput"
import { statesData } from "assets/data"


export default function ConnectWithChildRequestForm() {

    const { profileId } = useParams()
 
    const { childrenData } = useChildrenContext()
    // eslint-disable-next-line eqeqeq
    const child = childrenData.find((user: any) => user.id == profileId)


  return (
    <>
    {child ?
        <div className="md:flex md:px-[14%] px-4 py-6">
            <div className="md:block hidden w-[45%] mr-8">
                <img className="h-[350px]" src={process.env.PUBLIC_URL+`.${child.image}`} alt="" />
                <h2 className="text-3xl font-bold">Request to connect with {child.name}</h2>
            </div>
            <div className="flex-1">
                <h2 className="mb-6">We are Glad that you want to help {child.name} please tell us about yourself and we we will soon connect you</h2>
                <form>
                    {formData.map(field => (
                        <div className="mb-5">
                            <FormInput 
                                type={field.type} 
                                placeholder={field.placeholder} 
                                name={field.name} 
                                label={field.label} 
                                options={field.options} 
                            />
                        </div>
                    ))}
                    <div className="mb-5">
                        <textarea className="h-[6rem] w-full bg-slate-50 border border-slate-200 rounded" placeholder="Your Message..."></textarea>
                    </div>
                    <button className="w-full bg-cyan-600 text-white rounded py-2">Submit</button>
                </form>
            </div>
        </div>:
        <div className="p-16 bg-red-400 text-4xl">Loading....</div>
    }
    </>
  )
}


const formData = [
    {name:'name', type:'text', placeholder:'Your full name', label:'Name'},
    {name:'state', type:'select', placeholder:'State', label:'State', options:statesData},
    {name:'state', type:'select', placeholder:'State', label:'Who would you want to help?', options:[
        'Pay school fees',
        'Vocational training',
        'Pay school fees',
    ]},
    {name:'email-addess', type:'text', placeholder:'example@gmail.com', label:'E-mail Address'},
    {name:'email-addess', type:'text', placeholder:'+2119xxxxxxxx', label:'Phone Number'},
]