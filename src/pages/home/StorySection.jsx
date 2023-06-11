import { Heading1, Heading3 } from 'components/Heading'


export default function StorySection() {

  return (
    <div className='md:px-[8%] px-6 md:py-[4rem] py-[2rem]'>
        <div className="md:text-center md:px-[18%]">
            <Heading1 text='Stories from Sponsored Children' />
            <p>
                In 2020, more than 200,000 sponsors worldwide supported programs that directly benefited over 2.4 million children in 22 countries around the world – including the United States. Thanks to our growing community of child sponsors
            </p>
        </div>
        <div className="">
            <div className="md:grid hidden md:grid-cols-4 grid-cols-1 gap-5 mt-8">
                {data.map((child, i) => (
                    <div className="">
                        <img className='h-[170px]' src={child.image} alt="" />
                        <div className="py-2">
                            <Heading3 text={child.name} />
                            <p>{child.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:hidden mt-8">
                <div className="">
                    <img className='h-[200px]' src={data[0].image} alt="" />
                    <div className="p-">
                        <Heading3 text={data[0].name} />
                        <p>{data[0].text}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}


const data = [
    {
        name:'James Bol',
        text:`At 12 years old, Beauven is already making the world a safer place for kids. She trained to become a Child Health Promoter through her school's sponsored health and nutrition program`,
        image:process.env.PUBLIC_URL+'/images/education.jpg'
    },
    {
        name:'James Bol',
        text:`At 12 years old, Beauven is already making the world a safer place for kids. She trained to become a Child Health Promoter through her school's sponsored health and nutrition program`,
        image:process.env.PUBLIC_URL+'/images/street-g5bb03b9ae_1280.jpg'
    },
    {
        name:'James Bol',
        text:`At 12 years old, Beauven is already making the world a safer place for kids. She trained to become a Child Health Promoter through her school's sponsored health and nutrition program`,
        image:process.env.PUBLIC_URL+'/images/samuel-aboh-NGVBWmvmSHI-unsplash.jpg'
    },
    {
        name:'James Bol',
        text:`At 12 years old, Beauven is already making the world a safer place for kids. She trained to become a Child Health Promoter through her school's sponsored health and nutrition program`,
        image:process.env.PUBLIC_URL+'/images/samuel-aboh-NGVBWmvmSHI-unsplash.jpg'
    },
]