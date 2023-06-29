

export default function OurFocusSection() {
  return (
    <div className="px-[5%] py-[4rem]">
        <div className="md:px-[10%] text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">HOW WE CAN HELP STREET CHILDREN?</h2>
            <p>
                Street children can have complex circumstances and are very vulnerable to exploitation and violence. It’s hard to reach them with vital services such as education and healthcare. They miss out on their right to education because they are trying to support themselves or their families, so less formal approaches might
            </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {data.map(info => (
                <div className="h-[450px] flex items-end text-white bg-gray-50 border shadow-md rounded overflow-hidden" key={info.title}
                    style={{
                        backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(38, 146, 218, 0.1)), url(${process.env.PUBLIC_URL+info.image})`,
                        backgroundSize:'100% 100%'
                    }}
                >
                    {/* <img className="h-[400px]" src={info.image} alt="" /> */}
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                        <p className="line-clamp-3">{info.text}</p>
                        <button className="borde border-main px-3 py-1 rounded mt-3">Learn more</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const data = [
    {
        title:'Education',
        text:'Every child available for sponsorship is a child in need. In that sense, there’s no wrong choice. At the same time, we know that choosing a child to sponsor is an',
        image:process.env.PUBLIC_URL+'/images/child-8.jpg'
    },
    {
        title:'Vocational Training',
        text:'Every child available for sponsorship is a child in need. In that sense, there’s no wrong choice. At the same time, we know that choosing a child to sponsor is an',
        image:process.env.PUBLIC_URL+'/images/pexels-jairo-david-arboleda-1425883.jpg'
    },
    {
        title:'Education',
        text:'Every child available for sponsorship is a child in need. In that sense, there’s no wrong choice. At the same time, we know that choosing a child to sponsor is an',
        image:process.env.PUBLIC_URL+'/images/child-6.jpg'
    },
]