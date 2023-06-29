import { Link } from "react-router-dom";

export default function Logo({ cName }:{ cName?:string}) {
  return (
    <Link className="md:h-[55px] h-[45px] flex items-center"  to='/'>
        <img src={process.env.PUBLIC_URL+'./images/population.png'} alt="" />
        <span className={`text-3xl ml-3 ${cName}`}>Hope</span>
    </Link>
  )
}
