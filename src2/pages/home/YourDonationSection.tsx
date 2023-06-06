// import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "components/Buttons";
// import { Title1 } from "components/HeadingTitle";
import { Input } from "components/Input";


export default function YourDonationSection() {
  return (
    <div className="w-full md:px-[8%] px-4 py-[4rem] bg-slate-100 text-whitee">
      <div className="flex items-centerr md:mt-16">
        <div className="flex-1">
          <p className="text-xl">
            Are you implementing innovative programmes to help street children access an education or want to know more how you can contribute to realising education for all street children? Send us a message 
          </p>
          {/* <Title1 text="Your Generosity gives children a smaile, Support ourwork!" cName="text-white" /> */}
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
            {/* {formFields.map((field, index) => (
              <div className="mb-5" key={index}>
                <Input cName="" placeholder={field.placeholder} />
              </div>
            ))} */}
            <Button text="Submit" cName="bg-yellow-400 text-white flex justify-center text-slate-700 py-3 w-full" />
          </form>
        </div>
        <div className="md:block hidden flex-1 h-full ml-12">
          <img 
            className="h-full w-full rounded-md" 
            src={process.env.PUBLIC_URL+'./images/A-street-child-crying-consoled-by-his-friend-in-Ouagadougou-Burkina-Faso.webp'}
            alt="" 
          />
        </div>
      </div>
    </div>
  )
}

const formFields = [
  {name:'name', placeholder:'Name'},
  {name:'name', placeholder:'Country'},
  {name:'name', placeholder:'Address'},
  {name:'name', placeholder:'Donate to cause'},
  {name:'name', placeholder:'Amout'},
]
