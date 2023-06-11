import { Button } from "components/Buttons";
import { Input } from "components/Input";


export default function ContactForm( {cName} :{cName?:string}) {
  return (
    <div className={`${cName}`}>
        <h3 className="text-3xl font-bold mb-4">Send us a message </h3>
        <form>
            <div className="mb-5">
                <Input cName="" placeholder='Name' />
            </div>
            <div className="mb-5">
                <Input cName="" placeholder='E-mail address' />
            </div>
            <div className="mb-5">
                <textarea className="h-[9rem] w-full bg-white border-none rounded-md p-3" placeholder="Your Message..."></textarea>
            </div>
            <Button text="Submit" cName="bg-yellow-400 text-white flex justify-center text-slate-700 py-3 w-full" />
        </form>
    </div>
  )
}
