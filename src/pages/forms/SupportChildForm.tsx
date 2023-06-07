import FormInput from "./FormInput";
import { useParams } from "react-router-dom";

export default function SupportChildForm() {

    const { profileId } = useParams()


  return (
    <div className="flex px-[8%]">
        <div className="flex-1"></div>
        <div className="flex-1 p-8">
            <span className="text-3xl">Make {profileId} dream come true</span>
            <form>
                <div className="w-full mb-5">
                    <FormInput placeholder='Name' bg="bg-slate-200" />
                </div>
            </form>
        </div>
    </div>
  )
}
