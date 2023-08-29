import { Link } from "react-router-dom";


export default function CallToActionSection() {
  return (
    <div className="md:px-[8%] px-4 md:py-[5rem] py-[3rem] my-[4rem]"
      style={{
        backgroundImage:`
          linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), 
          url(${process.env.PUBLIC_URL+'/images/bg.png'})
        `,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
    >
      <div className="md:w-[60%] text-white">
        <h2 className="md:text-5xl text-3xl font-bold mb-3">Join Us in Making a Difference</h2>
        <p className="md:text-2xl">
          Together, we can transform the lives of street children through education. Join us in our mission and become a sponsor today. Your kindness and generosity will leave a lasting mark on these young hearts
        </p>
        <div className="mt-5">
          <Link className="bg-yellow-600 px-5 py-2" to='/children'>Sponsor a Child</Link>
        </div>
      </div>
    </div>
  )
}
