import SearchFilter from "components/SearchFilter"
import { Link } from "react-router-dom"


export default function Header() {

  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

 const headingTitle = (
    <div className="flex-1 text-white">
        <h1 className="md:text-6xl text-4xl font-bold">
            Giving the <span className="text-rose-600">street </span> 
            children’s right to <span className="text-rose-600"> education</span>
        </h1>
    </div>
 )
  return (
    <>
    <div className="md:flex items-center px-[5%] md:py-[4rem] py-[4rem]"
        style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`, 
            backgroundSize:'cover', 
            backgroundPosition:'center'
        }}
    >
        {headingTitle}
        <SearchFilter cName='md:block hidden' />
        <div className="md:hidden flex mt-8">
            <Link className="bg-rose-600 text-white rounded px-4 py-3" to='/children'>Sponsor a child</Link>
        </div>
    </div>
    </>
  )
}
