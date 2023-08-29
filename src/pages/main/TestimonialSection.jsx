import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

export default function TestimonialSection() {
  return (
    <div className="md:px-[8%] px-4 md:py-[4rem]">
        <div className="flex items-center justify-between">
            <h3 className="md:text-4xl text-2xl font-semibold">What Our Sponsors Say</h3>
            <div className="flex text-2xl">
                <span className="bg-gray-50 rounded-full p-2 mr-4">
                    <FiChevronLeft />
                </span>
                <span className="bg-gray-50 rounded-full p-2">
                    <FiChevronRight />
                </span>
            </div>
        </div>
        <div className="md:hidden grid md:grid-cols-1 gap-5 mt-8">
            <div className="bg-white rounded-md p-5" >
                <div 
                    className="
                        h-[190px] w-[190px] rounded-full mx-auto my-0 overflow-hidden
                    "
                >
                    <img src={data[0].image} alt="" />
                </div>
                <span className="text-xl">{data[0].name}</span>
                <p>{data[0].text}</p>
            </div>
        </div>
      <div className="md:grid hidden md:grid-cols-4 grid-cols-1 gap-5 mt-8">
        {data.map(user => (
            <div className="bg-white rounded-md p-5" key={user.id}>
                <div 
                    className="
                        h-[150px] w-[150px] rounded-full mx-auto my-0 overflow-hidden
                    "
                >
                    <img src={user.image} alt="" />
                </div>
                <span className="text-xl">{user.name}</span>
                <p className='line-clamp-4'>{user.text}</p>
            </div>
        ))}
      </div>
    </div>
  )
}


const data = [
    {
        id:1,
        name:'Sammuel Malong',
        image:process.env.PUBLIC_URL+'/pics/avatars/Image-9.png',
        text:`Empowering Hope has given me the opportunity to change a child's life. Knowing that I am contributing to their education and happiness brings me immense joy`
    },
    {
        id:2,
        name:'John Ladu',
        image:process.env.PUBLIC_URL+'/pics/avatars/Image-18.png',
        text:`Aliza Marko my sponsored child, has grown so much over the years. It's incredible to see the positive impact education can have on a child's life`
    },
    {
        id:1,
        name:'Sammuel Malong',
        image:process.env.PUBLIC_URL+'/pics/avatars/Image-8.png',
        text:`Empowering Hope has given me the opportunity to change a child's life. Knowing that I am contributing to their education and happiness brings me immense joy`
    },
    {
        id:2,
        name:'John Ladu',
        image:process.env.PUBLIC_URL+'/pics/avatars/Image-12.png',
        text:`Aliza Marko my sponsored child, has grown so much over the years. It's incredible to see the positive impact education can have on a child's life`
    },
]