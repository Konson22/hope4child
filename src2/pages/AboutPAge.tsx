import { Title3 } from "components/HeadingTitle"
import { Header } from "components/Header"
import ContactForm from "./forms/ContactForm"


export default function AboutPage() {

  return (
    <div>
        <Header 
            image="./images/children-g1c4ec8142_1280.jpg" 
            cName='pt-[4rem] pb-[7rem]'
            text="Who are we & what we do" 
        />
        <div className="md:px-[8%] px-3 py-8 flex">
            <div className="flex-1 md:mr-14">
                <div className="mb-8">
                    <Title3 text="Who are we?" />
                    <p className="my-3">
                        The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children. Despite this commendable progress
                    </p>
                </div>
                <div className="mb-8">
                    <Title3 text="Our mission" />
                    <p className="my-3">
                        The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children. Despite this commendable progress
                    </p>
                </div>
                <div className="mb-8">
                    <Title3 text="Who are we?" />
                    <p className="my-3">
                        The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children. Despite this commendable progress
                    </p>
                </div>
            </div>
            <div className="md:w-[45%]">
                <ContactForm cName="bg-orange-500 text-white p-8 rounded-md" />
            </div>
        </div>
    </div>
  )
}
