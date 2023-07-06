
export default function ChildRightSection() {
  return (
    <div className="md:px-[8%] px-3 md:py-[4rem] py-[2rem] md:bg-gray-200">
        <div className="text-center md:px-[15%] mb-8">
            <h2 className="md:text-4xl text-base md:font-bold font-bold mb-3">
                Street children Rights
            </h2>
            <p>
                Street children are confronted by a large number of problems. In fact, growing up in an environment generally regarded as dangerous, they incur considerable risks.
                As a consequence, some of their rights are very often compromised.
            </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {data.map(d => (
                <div className="bg-gray-100">
                    <img className="h-[300px]" src={d.image} alt="" />
                    <div className="p-3">
                        <h3 className="text-xl font-semibold">{d.title}</h3>
                        <p className="line-clamp-6">{d.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const data = [
    {
        title:'Right to Food',
        text:`Street children often don’t have access to a healthy and sufficient diet. Sometimes they don’t even have food, because living on the streets, they don’t produce any and don’t have money to buy.
        Also, these children don’t benefit from a balanced diet: they eat what they can find. Sometimes, when they have the choice, they even favor unhealthy foods such as ice cream, cakes, etc. and so run the risk of malnutrition. Growth problems are also common with these children.`,
        image:process.env.PUBLIC_URL+'./images/pexels-art-lov-16690847.jpg'
    },
    {
        title:'Right to Health',
        text:`The health of children growing up on the streets is strongly compromised. In fact, they don’t have access to sanitary facilities: they are often dirty and infested with fleas.
        Also, because of their lack of hygiene, street children are exposed to different diseases. Their health is often troubling. Without a family to take care of them, these youth must take care of themselves.
        Additionally, street children, to escape their reality, often use cannabis, alcohol, or inhale natural gas. Unfortunately, these very hard living conditions, have a negative impact not only on their physical and psychosocial development, but also on their cultural and economic development`,
        image:process.env.PUBLIC_URL+'./images/child-8.jpg'

    },
    {
        title:'Right to Education',
        text:`Street Children are obviously not educated. Because of this, they don’t have the same opportunities as other children. In fact, because they don’t see a future for themselves, and because they have no professional training, they are hindered from finding a job and from finally leaving the streets`,
        image:process.env.PUBLIC_URL+'./images/child-8.jpg'
    },
    {
        title:'Right to Non-discrimination',
        text:`
        Seen as marginal, street youth are often victims of discrimination. Generally, adults have prejudices that stigmatize them as “street children”. Consequently, they are often associated with the dangers of the streets. It is often difficult for these children to reintegrate into society.`,
        image:process.env.PUBLIC_URL+'./images/0212HR0184STREET-CHILDREN.jpg'
    },
]



