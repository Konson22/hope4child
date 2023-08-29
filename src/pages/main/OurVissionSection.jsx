import { HeadingTitle2 } from "../../components/HeadingTitle";


export default function OurVissionSection() {
  return (
    <div className="md:px-[8%] px-4 md:py-[4rem]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="bg-white">
          <div className="md:h-[300px] h-[250px]">
            <img src={process.env.PUBLIC_URL+'/images/0212HR0184STREET-CHILDREN.jpg'} alt="" />
          </div>
          <div className="p-4">
            <HeadingTitle2 text='Our Mision' cName="text-left tex mb-1" />
            <p>
              At 
              At Empowering Futures, our mission is to bring hope, love, and knowledge to the lives of street children. We firmly believe that education is the key to unlocking their full potential and creating lasting change. By offering access to quality education, we aim to break down barriers and provide these children with the tools they need to overcome adversity and build a better life for themselves.
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="md:h-[300px] h-[250px]">
            <img src={process.env.PUBLIC_URL+'/images/child-1.jpg'} alt="" />
          </div>
          <div className="p-4">
            <HeadingTitle2 text='Our Vision' cName="text-left text-rose-500 mb-1" />
            <p>
              At Empowering Futures, we envision a world where every child, regardless of their background, has access to quality education and the opportunity to achieve their dreams. By sponsoring street children's education, you can join us in making this vision a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
