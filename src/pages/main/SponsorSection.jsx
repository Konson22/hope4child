import { Link } from "react-router-dom";


export function SponsorSection() {
  return(
    <div className='lg:flex lg:px-[8%] px-3 py-[4rem]'>
      <div className="flex-1">
        <img className='lg:h-[400px] h-[250px] w-full' src={process.env.PUBLIC_URL+'./images/refugee-childern.jpeg'} alt='' />
      </div>
      <div className="lg:w-[45%] lg:pl-8">
        <h2 className="text-4xl font-bold mb-3">You can help end proverty for good by sponsoring a child!</h2>
        <p>
          Poverty locks the door to future success, curbing a child’s potential. But education busts open that door.
          Poverty keeps some families from enrolling their children in school due to high cost of tuition, books and supplies. The children are needed to work and help provide for their family instead.
          Cultural views on girls and women restrict education for some children, particularly when uneducated parents don’t understand the value of an education. Child marriage, safety concerns and lack of access to clean water all work to keep girls out of school. This devaluing of education and gender inequality mires children in a generational cycle of poverty.
        </p>
        <div className="mt-6">
          <Link className="px-3 py-2 rounded bg-sky-500 text-white mt-5" to='/sponsor-child'>Sponsor Child</Link>
        </div>
      </div>
    </div>
   )
}
