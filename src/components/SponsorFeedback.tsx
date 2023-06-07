import { Heading3 } from "components/Heading";


export default function SponsorFeedback() {
  return (
    <div className="md:px-[10%] px-5 py-[5rem]">
        <h3 className="text-4xl font-bold text-center ">What You <span className="text-rose-600">Receive</span> When You Sponsor a <span className="text-rose-600">Child</span></h3>
        <div className="md:grid grid-cols-3 gap-5 mt-10">
            {data.map(response => (
                <div className="border text-center">
                    <img className="h-[200px]" src={response.image} alt="" />
                    <div className="px-3 py-2">
                        <Heading3 text={response.title} />
                        <p>{response.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const data = [
    {
        image:process.env.PUBLIC_URL+'/images/avatars/image-2.png',
        title:'A Pen Pal',
        text:`
            Letters to and from your child will allow you to learn about each other's lives and share prayer requests and encouragement.
        `,
    },
    {
        image:process.env.PUBLIC_URL+'/images/avatars/image-2.png',
        title:'Photos Of Your Child',
        text:`
            Watch your child grow through photos shared from your child's Compassion Center.
        `,
    },
    {
        image:process.env.PUBLIC_URL+'/images/avatars/image-2.png',
        title:'Updates/Prayer Requests',
        text:`
            You will receive regular prayer requests for your child and information on local crises that affect them.
        `,
    },
]