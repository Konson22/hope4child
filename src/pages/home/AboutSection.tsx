import { Button } from "components/Buttons";
import { Title1 } from "components/HeadingTitle";
import { ArrowRightIcon } from "@heroicons/react/24/solid";


export default function AboutSection() {
  return (
    <div className="md:px-[8%] px-3 py-[4rem] md:flex items-cente">
      <div className="md:w-[45%] md:mr-12 md:mb-0 mb-5">
        <img className="h-full w-full rounded-md" src={process.env.PUBLIC_URL+'./images/A-street-child-crying-consoled-by-his-friend-in-Ouagadougou-Burkina-Faso.webp'} alt="" />
      </div>
      <div className="flex-1">
        {/* <h1 className="text-xl border-l-2 border-rose-500 px-5 text-rose-500 mb-8">ABOUT HOPE4CHILD</h1> */}
        <Title1 text="Realising street children’s right to education" cName="mb-5" />
        <p>
          The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. <span className="md:block hidden"> The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children.Despite this commendable progress, street children are at risk of being left behind. The numerous societal, practical and health barriers street children face means they are among the millions of the world’s hardest-to-reach children who are unable to attend mainstream schools and face high drop-out rates from formal education programmes</span>
        </p>
        <Button text="Learn more" cName='bg-rose-400 text-white rounded px-3 py-3 mt-8' Icon={ArrowRightIcon} />
      </div>
    </div>
  )
}
