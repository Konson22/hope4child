import { Title3 } from "components/HeadingTitle"
import DonateForm from "./forms/DonateForm"
import { Header } from "components/Header"


export default function SponsorPage() {

  return (
    <div>
        <Header 
            image="./images/children-g1c4ec8142_1280.jpg" 
            cName='pt-[4rem] pb-[7rem]'
            text="Sponsor a child while respecting his rights" 
        />
        <div className="md:px-[8%] px-3 flex">
            <div className="flex-1 md:p-8 p-3">
                <p className="md:text-3xl hidden">
                    With Humanium, your sponsorship prioritizes protection of the child and their well-being. Your monthly gifts help ensure all children’s rights become a reality. Learn more
                    Without obligation: you control your payments without consequences for the child.
                    Tax deductible: your sponsorship is a qualified charitable donation.
                    Respectfully, you help the child and his community.
                </p>
                <Title3 text="Realising street children’s right to education" />
                <p className="my-3">
                    The universal right to education has a solid basis in international law and is a key component of the United Nation’s 2030 Agenda, centred on leaving no one behind. The goal to get all children, adolescents and youth into education by 2030 has seen rising global enrolment rates reach 82% in 2017, the figure being as high as 91% for primary school aged children. Despite this commendable progress, street children are at risk of being left behind. The numerous societal, practical and health barriers street children face means they are among the millions of the world’s hardest-to-reach children who are unable to attend mainstream schools and face high drop-out rates from formal education programmes
                </p>
                <p>
                    When data on enrolment rates are gathered, street children not enrolled in school are often not included – as most of the data is gathered through household surveys.[ii] This means they are neither part of the 91% of children in primary school, nor part of the 9% of children not in primary school – they remain invisible altogether
                </p>
                <div className="mt-5">
                    <Title3 text="Why Sponsor Street child" />
                    <p>
                        Allowing street children to be left behind from efforts improving access to education will only perpetuate their cycle of poverty and the countless human rights violations they face on the streets every day. Providing them with access to education can not only provide safe spaces and security whilst they are on the streets, but also opportunities to move away from the streets and go on to lead happy and healthy adult lives.
                    </p>
                </div>
            </div>
            <div className="w-[45%] md:block hidden mt-[-4rem]">
                <DonateForm />
            </div>
        </div>
    </div>
  )
}
