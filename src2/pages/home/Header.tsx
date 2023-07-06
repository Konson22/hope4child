// import SearchFilter from "components/SearchFilter"
import { Link } from "react-router-dom"
import SearchFilter from "../../components/SearchFilter"


export default function Header() {

  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

 const headingTitle = (
    <div className="flex-1 text-white">
        <h1 className="md:text-6xl text-4xl font-bold">
            Realizing Street Children Right to Education!
            {/* Giving the Street Children’s Right To Education */}
        </h1>
    </div>
 )
  return (
    <>
    <div className="md:flex items-center px-[5%] md:py-[5.5rem] py-[4rem] relative"
        style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`, 
            backgroundSize:'cover', 
            backgroundPosition:'center'
        }}
    >
        {headingTitle}
        <SearchFilter cName='md:block hidden' />
        <div className="md:hidden flex mt-8">
            <Link className="bg-main2 text-white rounded px-4 py-3" to='/children'>Sponsor a child</Link>
        </div>
        <svg id="wave" className="absolute bottom-0 left-0 z-10" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgb(255, 255, 255)" offset="0%"/><stop stop-color="rgb(255, 255, 255)" offset="100%"/></linearGradient></defs>
        <path className="path" fill="url(#sw-gradient-0)" d="M0,30L10,25C20,20,40,10,60,6.7C80,3,100,7,120,8.3C140,10,160,10,180,21.7C200,33,220,57,240,66.7C260,77,280,73,300,63.3C320,53,340,37,360,28.3C380,20,400,20,420,18.3C440,17,460,13,480,16.7C500,20,520,30,540,35C560,40,580,40,600,36.7C620,33,640,27,660,30C680,33,700,47,720,46.7C740,47,760,33,780,33.3C800,33,820,47,840,50C860,53,880,47,900,45C920,43,940,47,960,46.7C980,47,1000,43,1020,46.7C1040,50,1060,60,1080,56.7C1100,53,1120,37,1140,40C1160,43,1180,67,1200,65C1220,63,1240,37,1260,25C1280,13,1300,17,1320,25C1340,33,1360,47,1380,45C1400,43,1420,27,1430,18.3L1440,10L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"/></svg>
    </div>
    </>
  )
}
