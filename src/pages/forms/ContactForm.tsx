import { Button } from "components/Buttons";
import { Input } from "components/Input";


export default function ContactForm( {cName} :{cName?:string}) {
  return (
    <div className={`md:flex items-center ${cName}`}>
        <div className="flex-1">
            <p className="text-xl mb-8">
                Are you implementing innovative programmes to help street children access an education or want to know more how you can contribute to realising education for all street children? Send us a message 
            </p>
        </div>
        <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">Send us a message </h3>
            <form>
                <div className="mb-5">
                    <Input cName="" placeholder='Name' />
                </div>
                <div className="mb-5">
                    <Input cName="" placeholder='E-mail address' />
                </div>
                <div className="mb-5">
                    <textarea className="h-[9rem] w-full bg-white rounded-md p-3" placeholder="Your Message..."></textarea>
                </div>
                <Button text="Submit" cName="bg-yellow-400 text-white flex justify-center text-slate-700 py-3 w-full" />
            </form>
        </div>
    </div>
  )
}
