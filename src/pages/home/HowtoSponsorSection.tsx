import { FiHeart } from "react-icons/fi"


export default function HowtoSponsorSection() {
  return (
    <div className="md:px-[18%] px-3 py-[4rem] text-white text-center bg-main">
        <h2 className="md:text-3xl text-2xl font-bold mb-10">HOW TO SPONSOR A CHILD?</h2>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
            {data.map((d, index) => (
                <div className="mb-7" key={index}>
                    <div className="w-[max-content] text-5xl rounded-full p-4 bg-white text-main mx-auto my-0">
                        <FiHeart />
                    </div>
                    <h3 className="text-xl font-bold my-3">{d.title}</h3>
                    <p className="line-clamp-3">{d.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
// export default function HowtoSponsorSection() {
//   return (
//     <div className="md:mx-[5%] flex bg-main">
//         <div className="flex-1 p-8">
//             <h2 className="md:text-4xl text-2xl font-bold mb-3">HOW TO SPONSOR A CHILD?</h2>
//             {data.map((d, index) => (
//                 <div 
//                     className="flex items-center bg-cyan-500 text-white rounded-tl-[55px] rounded-bl-[55px] mb-7"
//                     key={index}
//                 >
//                     <span className="h-[70px] w-[70px] flex items-center justify-center bg-rose-600 text-white rounded-full p-3">{index + 1}</span>
//                     <div className="flex-1">
//                     <h3 className="text-xl">{d.title}</h3>
//                     <p className="line-clamp-3">{d.text}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <div className="w-[40%]">
//             <img src={process.env.PUBLIC_URL+'./images/bg-image.jpg'} alt="" />
//         </div>
//     </div>
//   )
// }


const data = [
    {
        title:'Choose a child to sponsor',
        text:`Every child available for sponsorship is a child in need. In that sense, there’s no wrong choice.
        At the same time, we know that choosing a child to sponsor is an important, life-changing decision. We believe those choices are the beginning of a beautiful story that God is writing.
        Once you choose a child to sponsor, the logistical side of things are easy: you provide your information, let us know how you’d like to make your regular sponsorship donation (we have lots of payment options) and at what frequency (monthly, annually or other) and then you’re all set and on your way to the next stage of your child sponsorship journey
        `
    },
    {
        title:'Learning about your child.',
        text:`Now that your sponsorship is started, it’s time to learn about the child, family and community you’ve chosen to invest in. You can expect us to follow up by email and mail with more information about child sponsorship and specifically the child you sponsor.
        `
    },
    {
        title:'Visiting Your Sponsored Child.',
        text:`This isn’t a part of every child sponsorship journey (though every sponsor is invited!), but when it is, it is an unforgettable experience for both sponsor and child.
        `
    },
    {
        title:'Choosing a child to sponsor',
        text:`Every child available for sponsorship is a child in need. In that sense, there’s no wrong choice.
        At the same time, we know that choosing a child to sponsor is an important, life-changing decision. We believe those choices are the beginning of a beautiful story that God is writing.
        Once you choose a child to sponsor, the logistical side of things are easy: you provide your information, let us know how you’d like to make your regular sponsorship donation (we have lots of payment options) and at what frequency (monthly, annually or other) and then you’re all set and on your way to the next stage of your child sponsorship journey
        `
    },
]