// import SearchFilter from "components/SearchFilter"
import { Link } from "react-router-dom"
import SearchFilter from "../../components/SearchFilter"


export default function Header() {

  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

 const headingTitle = (
    <div className="w-[80%] text-white">
        <h1 className="md:text-6xl text-4xl font-bold">
            Realizing Street Children Right to Education!
            {/* Giving the Street Children’s Right To Education */}
        </h1>
    </div>
 )
  return (
    <>
    <div className="md:flex items-center px-[5%] md:py-[8.5rem] py-[4rem] relative"
        style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`, 
            backgroundSize:'cover', 
            backgroundPosition:'center'
        }}
    >
        <div className="w-[80%] text-white">
            <h1 className="md:text-6xl text-4xl font-bold">
                Realizing Street Children Right to Education!
                {/* Giving the Street Children’s Right To Education */}
            </h1>
        </div>
        
    </div>
    </>
  )
}
