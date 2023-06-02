import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button1 } from "components/Buttons";
import { HeadingText1 } from "components/HeadingText";
import { Link } from "react-router-dom";


export default function IntroductionSection() {

  return (
    <div className="md:px-[8%] px-3 py-[4rem] md:flex items-cente">
      <HeadingText1 text="Realising street children’s right to education" cName="md:hidden block mb-3" />
      <div className="md:w-[45%] md:mr-12 md:mb-0 mb-5">
        <img className="h-full w-full rounded-md" src={process.env.PUBLIC_URL+'./images/A-street-child-crying-consoled-by-his-friend-in-Ouagadougou-Burkina-Faso.webp'} alt="" />
      </div>
      <div className="flex-1">
        <HeadingText1 text="Realising street children’s right to education" cName="md:block hidden" />
        <p className="md:line-clamp-none line-clamp-6 mt-3">
          The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. <span className=""> The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children.Despite this commendable progress, street children are at risk of being left behind. The numerous societal, practical and health barriers street children face means they are among the millions of the world’s hardest-to-reach children who are unable to attend mainstream schools and face high drop-out rates from formal education programmes</span>
        </p>
        <Link to='/education'>
          <Button1 text="Learn more" cName="mt-5" Icon={ArrowRightIcon} />
        </Link>
      </div>
    </div>
  )
}
