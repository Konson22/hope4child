import { Title3 } from "components/HeadingTitle"
import DonateForm from "./forms/DonateForm"


export default function HealthPage() {
  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

  return (
    <div>
        <header className="px-[10%] md:py-[4rem] py-[2rem] text-white"
            style={{
                backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${bgImage}')`, 
                backgroundSize:'cover', 
                backgroundPosition:'center'
            }}
        >
            <h1 className="md:text-6xl text-2xl font-bold mb-4">Barriers to education for street children</h1>
        </header>
        <div className="md:px-[8%] px-3 flex">
          <div className="flex-1 md:p-8 p-3 mr-4">
            <Title3 text="Right to Health" cName="mb-2" />
            <p>
              The health of children growing up on the streets is strongly compromised. In fact, they don’t have access to sanitary facilities: they are often dirty and infested with fleas.
              Also, because of their lack of hygiene, street children are exposed to different diseases. Their health is often troubling. Without a family to take care of them, these youth must take care of themselves.
              Additionally, street children, to escape their reality, often use cannabis, alcohol, or inhale natural gas. Unfortunately, these very hard living conditions, have a negative impact not only on their physical and psychosocial development, but also on their cultural and economic development.
            </p>
            <div className="mt-8">
              <Title3 text="Right to Food" cName="mb-3" />
              <p>
                Street children often don’t have access to a healthy and sufficient diet. Sometimes they don’t even have food, because living on the streets,  they don’t produce any and don’t have money to buy.
              </p>
              <p>
                Also, these children don’t benefit from a balanced diet: they eat what they can find. Sometimes, when they have the choice, they even favour unhealthy foods such as ice cream, cakes, etc. and so run the risk of malnutrition. Growth problems are also common with these children
              </p>
            </div>
          </div>
          <div className="w-[40%] md:block hidden mt-[-4rem]">
            <DonateForm />
          </div>
        </div>
    </div>
  )
}
