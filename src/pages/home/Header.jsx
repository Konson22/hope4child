import { Link } from 'react-router-dom';

export default function Header(){

  const bgImage = process.env.PUBLIC_URL+'./images/charlein-gracia--Ux5mdMJNEA-unsplash.jpg'

  const headerText = (
    <div className="">
      <h1 className="lg:text-6xl text-base font-bold lg:mb-10 mb-6">EVERY CHILD DESERVE THE BEST CHANCE IN LIFE</h1>
      <div className="flex items-center md:mt-6">
        <Link className="md:px-6 px-3 md:py-4 py-2 rounded text-white bg-rose-500 mr-3" to='/sponsor-child'>Sponsor a child</Link>
        <Link className="md:px-5 px-3 md:py-4 py-2 rounded text-white bg-rose-500" to='/register-child'>
          <span className="md:hidden flex">Donate</span>
          <span className="md:flex hidden">Make Donation</span>
        </Link>
      </div>
    </div>
  )
  return(
    <div className='bg-dark-teal'>
      <header className="header-container flex items-center md:h-[65vh] h-[30vh] px-[9%] text-white z-20"
        style={{
          backgroundImage:`linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'
        }}
      >
        <div className="md:block hidden md:w-[60%]">
          { headerText }
        </div>
      </header>
      <div className="md:hidden block bg-white mx-4 px-10 py-8 mt-[-3rem] rounded-md shadow-md z-50">
        { headerText }
      </div>
    </div>
  )
}