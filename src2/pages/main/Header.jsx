import { Link } from 'react-router-dom';

export default function Header(){

  const bgImage = process.env.PUBLIC_URL+'./images/header-bg.jpeg'

  return(
    <header className="header-container flex items-center h-[60vh] px-[9%] text-white relative"
      style={{
        backgroundImage:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'
      }}
    >
      <div className="md:w-[60%]">
        <h1 className="lg:text-6xl text-2xl font-bold lg:mb-10 mb-6">EVERY CHILD DESERVE THE BEST CHANCE IN LIFE</h1>
        <div className="flex items-center md:mt-6">
          <Link className="md:px-6 px-3 md:py-4 py-2 rounded text-white bg-amber-600 mr-3" to='/sponsor-child'>Sponsor Child</Link>
          <Link className="md:px-6 px-3 md:py-4 py-2 rounded text-white bg-amber-600" to='/register-child'>Register Child</Link>
        </div>
      </div>
    </header>
  )
}