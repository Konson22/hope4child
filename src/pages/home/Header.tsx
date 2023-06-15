import { Link } from "react-router-dom"

export default function Header() {
  const bgImage = process.env.PUBLIC_URL+'./images/bg-image.jpg'
  
  const headerText = (cName:string) => (
    <div 
      className={`
        md:w-[89%] md:bg-transparent bg-cyan-50 shadow-md ${cName} 
        rounded-md  md:p-0 p-6 md:mx-0 mx-3 md:mt-0 mt-[-2.5rem]
      `}
    >
      <h1 className="titlee md:text-7xl text-2xl md:font-bold">Giving the <span className="text-rose-600">street</span> children’s right to <span className="text-rose-600">education</span></h1>
      <div className=" md:mt-12 mt-5">
        <Link 
          className="bg-rose-600 text-white md:text-xl md:px-6 px-5 md:py-4 py-2 rounded"
          to='/children'
        >
          Sponsor child
        </Link>
      </div>
    </div>
  )

  return(
    <div className="bg-cyan-600">
      <header
        className="flex items-center md:px-[8%] px-3 md:py-[7rem] py-[6rem] bg-red-500 text-white"
        style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
      >
        {headerText('md:block hidden')}
      </header>
      {headerText('md:hidden block')}
    </div>
  )
}
  
