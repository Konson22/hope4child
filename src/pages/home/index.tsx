import { Heading1 } from "components/Heading";
import ChildrenSection from "./ChildrenSection";
import Header from "./Header";
import SearchFilter from "components/SearchFilter";


export default function HomePage() {

  return (
    <div>
        <Header />
        {/* START OF INTRODUCTION SECTION */}
        <div className="clip-path-bottom md:flex items-center md:px-[8%] px-3 pt-[3rem] pb-[5rem] bg-cyan-600 text-white">
            <div className="flex-1">
                {/* <Heading1 text="Realising street children’s right to education" /> */}
                <p className="md:text-2xl dmd:text-center">
                    According to UN stats, there are approximately up to 150 million children worldwide living on the streets today. Some have had no choice. They were orphaned, abandoned or disowned by their parents. Some have faced war or natural disasters and have no home to return to. Others have opted to brave the dangers of street life rather than face one more day in an abusive home
                </p>
            </div>
            <SearchFilter />
        </div>
        {/* end OF INTRODUCTION SECTION */}
      

        {/*  ------ THE START OF OUR FOCUS SECTION ----------- */}
        <div className="md:px-[8%] px-3 py-[4rem] text-center">
            <div className="md:px-[15%] mb-8">
                <span className="md:text-4xl font-bold text-rose-600">WHAT WE FOCUS ON</span>
                {/* <div className="flex justify-center text-cyan-500 md:text-2xl text-xl font-bold my-4">
                    <div className="">EDUCATION</div>
                    <div className="border-x-2 md:px-4 px-2 md:mx-4 mx-2 border-rose-600">HEALTH</div>
                    <div className="">EDUCATION</div>
                </div> */}
                <p className='md:text-xl'>
                    Street children are confronted by a large number of problems. In fact, growing up in an environment generally regarded as dangerous, they incur considerable risks.
                    As a consequence, some of their rights are very often compromised
                </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-7">
                {data.map((cause) => (
                    <div className="shadow rounded-md overflow-hidden">
                        <img 
                            className="md:h-[320px] h-[300px]" 
                            src={cause.image} 
                            alt="" 
                        />
                        <div className="bg-cyan-400 text-white text-left p-3">
                            <h3 className="text-xl font-bold">{cause.title}</h3>
                            <p className="line-clamp-3">{cause.text}</p>
                            <button className="bg-rose-500 text-white px-5 py-2 mt-5">Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       
        {/*  ------ THE END OF OUR FOCUS SECTION ----------- */}

        {/*  ------ THE START OF CHILDREN SECTION ----------- */}
        <ChildrenSection />
        {/*  ------ THE END OF CHILDREN SECTION ----------- */}

        <div className="md:mx-[8%] md:my-16 my-7 md:py-[7rem] py-[3rem]"
            style={{
                backgroundImage:`
                linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.1)), 
                url(${process.env.PUBLIC_URL}'./images/bg-image.jpg')
                `,
                backgroundSize:'cover',
                backgroundPosition:'top'
            }}
        >
            <div className="md:w-[60%] md:px-16 px-3 text-white">
                <Heading1 text="EVERY CHILD COUNTS" cName="mb-3" />
                <p className="md:text-2xl">
                    Street Children are obviously not educated. Because of this, they don’t have the same opportunities as other children. In fact, because they don’t see a future for themselves, and because they have no professional training.
                </p>
                <button className="bg-rose-600 text-white rounded-md mt-8 px-6 py-3">Sponsor child</button>
            </div>
        </div>
        {/*  ------ THE START OF SIGN UP SECTION ----------- */}
        <div className="md:mx-[17%] md:px-[8%] px-3 py-[3rem]">
            <h3 className="text-3xl  text-center mb-2">Sign up for our new letter</h3>
            <p className=" text-center">
                Street children are confronted by a large number of problems. In fact, growing up in an environment generally regarded as dangerous, they incur considerable risks.
            </p>
            <div className="bg-cyan-600 md:p-12 px-3 py-6 text-white">
                <span className="block m-1">Email Address</span>
                <div className="flex h-[3rem]">
                    <input 
                        type="email" 
                        className="h-full bg-white" 
                        placeholder="example@gmail.com"
                    />
                    <button className="h-full bg-rose-500 text-white rounded px-4">Subcribe</button>
                </div>
            </div>
        </div>
        {/*  ------ THE END OF SIGN UP SECTION ----------- */}
    </div>
  )
}


const data = [
    {
        title:'Right to Education',
        text:'Street Children are obviously not educated. Because of this, they don’t have the same opportunities as other children. In fact, because they don’t see a future for themselves, and because they have no professional training, they are hindered from finding a job and from finally leaving the streets',
        image:process.env.PUBLIC_URL+'./images/children/child-7.jpg'
    },
    {
        title:'Right to Health',
        text:'street children are exposed to different diseases. Their health is often troubling. Without a family to take care of them, these youth must take care of themselves.',
        image:process.env.PUBLIC_URL+'./images/children/child-1.jpg'
    },
    {
        title:'Right to food',
        text:'Street children often don’t have access to a healthy and sufficient diet. Sometimes they don’t even have food, because living on the streets,  they don’t produce any and don’t have money to buy.',
        image:process.env.PUBLIC_URL+'./images/children/child-6.jpg'
    },
]