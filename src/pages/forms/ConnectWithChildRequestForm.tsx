import { useChildrenContext } from "contexts/ChildrenContextProvider"
import { useParams } from "react-router-dom"


export default function ConnectWithChildRequestForm() {

    const { profileId } = useParams()
 
    const { childrenData } = useChildrenContext()
    // eslint-disable-next-line eqeqeq
    const child = childrenData.find((user: any) => user.id == profileId)


  return (
    <>
    {child ?
        <div className="md:flex px-[10%] py-6">
            <div className="flex-1">
                <h2 className="text-3xl font-bold">Request to connect with {child.name}</h2>
            </div>
            <div className="flex-1">
                <form>
                    {formData.map(field => (
                        <div className="mb-5">
                            <input className="h-[3.5rem] bg-slate-200" type="text" {...field} />
                        </div>
                    ))}
                    <div className="mb-5">
                        <textarea className="h-[6rem] bg-slate-200" placeholder="Your Message..."></textarea>
                    </div>
                </form>
            </div>
        </div>:
        <div className="p-16 bg-red-400 text-4xl">Loading....</div>
    }
    </>
  )
}


const formData = [
    {name:'name', placeholder:'Your full name'},
    {name:'state', placeholder:'State'},
    {name:'email-addess', placeholder:'E-mail Addess'},
    {name:'email-addess', placeholder:'Phone Number'},
]