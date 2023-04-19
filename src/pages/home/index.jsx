import { Link } from "react-router-dom";
import { LazyImage } from "../../components/LazyImage"
import { useChildren } from "../../contexts/ChildrenContextProvider"
import Header from "./Header";


export default function Home() {
  return (
    <>
      <Header />
      {/* Start of about section */}
      <div className="bg-gray-800 text-white">
          <div className="md:flex md:pb-12 pb-5 md:pt-24 pt-8 md:px-[15%] px-3 bg-dark-teal">
            <div className="md:w-[30%] mr-4 md:mb-0 mb-3">
              <h1 className="md:text-7xl text-4xl font-bold font-sans">Our Mission!</h1>
            </div>
            <div className="flex-1">
              <h2 className="md:text-4xl text-2xl font-bold mb-4">Help Where the Need is Greatest</h2>
                <p>
                  Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good
                  {/* We at Serving Orphans Worldwide believe that all children are loved by God. Throughout Scripture, we see God’s heart for the fatherless and James 1:27 makes very clear the mandate to care for orphaned children to His glory. We believe that one of the responsibilities of God’s people is to care for widows, orphans, and those who have been marginalized by the economic and social systems of the world. It is to that end that we come alongside the body of Christ to support orphanages and children’s homes. */}
                </p>
            </div>
        </div>
        <svg id="wave" viewBox="0 0 1440 190" version="1.1" xmlns="http://www.w3.org/2000/svg" className='rotate-[180deg]'>
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgb(5, 175, 197)" offset="100%"></stop>
            <stop stop-color="rgb(5, 175, 197)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient-0)" d="M0,19L720,57L1440,19L2160,57L2880,171L3600,0L4320,114L5040,57L5760,114L6480,38L7200,95L7920,0L8640,152L9360,19L10080,171L10800,38L11520,171L12240,38L12960,38L13680,76L14400,133L15120,19L15840,133L16560,0L17280,171L17280,190L16560,190L15840,190L15120,190L14400,190L13680,190L12960,190L12240,190L11520,190L10800,190L10080,190L9360,190L8640,190L7920,190L7200,190L6480,190L5760,190L5040,190L4320,190L3600,190L2880,190L2160,190L1440,190L720,190L0,190Z">
          </path>
        </svg>
      </div>
      {/* Start of Target */}
      <div className="bg-gray-800 md:pt-8 pt-3">
        <div className="md:px-[20%] px-2 py-16 text-white text-center">
            <p className="md:text-3xl text-sm">We at Serving Orphans Worldwide believe</p>
            <h2 className="md:text-5xl text-2xl font-bold text-dark-teal my-5">COMPASSION | INTEGRITY | EXCELLENCE</h2>
            <p>
                We at Serving Orphans Worldwide believe that all children are loved by God. Throughout Scripture, we see God’s heart for the fatherless and James 1:27 makes very clear the mandate to care for orphaned children
            </p>
        </div>
        <svg id="wave2" viewBox="0 0 1440 190" version="1.1" xmlns="http://www.w3.org/2000/svg" className=''>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgb(255, 255, 255)" offset="100%"></stop>
              <stop stop-color="rgb(255, 255, 255)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path 
            fill="url(#sw-gradient-1)" d="M0,19L720,57L1440,19L2160,57L2880,171L3600,0L4320,114L5040,57L5760,114L6480,38L7200,95L7920,0L8640,152L9360,19L10080,171L10800,38L11520,171L12240,38L12960,38L13680,76L14400,133L15120,19L15840,133L16560,0L17280,171L17280,190L16560,190L15840,190L15120,190L14400,190L13680,190L12960,190L12240,190L11520,190L10800,190L10080,190L9360,190L8640,190L7920,190L7200,190L6480,190L5760,190L5040,190L4320,190L3600,190L2880,190L2160,190L1440,190L720,190L0,190Z"
          >
          </path>
        </svg>
      </div>
      
      <WhatWeFocusOn />
      <Sponsorship />
    </>
  )
}

function WhatWeFocusOn(){

  
  return(
    <div className="md:px-[12%] px-3 pb-28 ">
      <div className="md:w-[70%] m-auto text-center">
        <h2 className="md:text-5xl text-2xl text-dark-teal font-bold mb-3">WHAT WE FOCUS ON</h2>
        <p className="md:block hidden">
          Your donation combined with others allow our partner homes to give a child more than the basic necessities
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-3 md:text-left text-center mt-8">
        <div className="">
          <img className="md:h-[150px] h-[100px] md:w-[150px] w-[100px] md:mx-0 mx-auto my-0" src={process.env.PUBLIC_URL+'/images/educa.png'} alt='' />
          <h4 className="md:text-2xl font-semibold mb-2">Education</h4>
          <p className="md:block hidden">
            Your donation combined with others allow our partner homes to give a child more than the basic necessities
          </p>
        </div>
        <div className="">
          <img className="md:h-[150px] h-[100px] md:w-[150px] w-[100px] md:mx-0 mx-auto my-0" src={process.env.PUBLIC_URL+'/images/health.png'} alt='' />
          <h4 className="md:text-2xl font-semibold mb-2">Health</h4>
          <p className="md:block hidden">
            Your donation combined with others allow our partner homes to give a child more than the basic necessities
          </p>
        </div>
        <div className="">
          <img className="md:h-[150px] h-[100px] md:w-[150px] w-[100px] md:mx-0 mx-auto my-0" src={process.env.PUBLIC_URL+'/images/hunger.png'} alt='' />
          <h4 className="md:text-2xl font-semibold mb-2">Niturition</h4>
          <p className="md:block hidden">
            Your donation combined with others allow our partner homes to give a child more than the basic necessities
          </p>
        </div>
        <div className="">
          <img className="md:h-[150px] h-[100px] md:w-[150px] w-[100px] md:mx-0 mx-auto" src={process.env.PUBLIC_URL+'/images/educa.png'} alt='' />
          <h4 className="md:text-2xl font-semibold mb-2">Education</h4>
          <p className="md:block hidden">
            Your donation combined with others allow our partner homes to give a child more than the basic necessities
          </p>
        </div>
      </div>
    </div>
  )
}




function Sponsorship() {

  const { childrenData } = useChildren();


  return (
    <div className="md:px-[13%] px-[8%] pb-4">
      <div className="md:w-[85%] m-auto">
        <h2 className="md:text-5xl text-2xl text-dark-teal font-bold mb-3">CURRENT SPONSORSHIP OPPORTUNITIES</h2>
        <p>
          Your donation combined with others allow our partner homes to give a child more than the basic necessities to survive, but the skills and opportunities to thrive as they transition to adulthood.
        </p>
      </div>
      <div className="md:grid grid-cols-3 gap-4 mt-10">
        {childrenData.length > 0 && childrenData.slice(0,6).map(child => (
          <Link className="block w-full bg-gray-200 border relative cursor-pointer md:mb-0 mb-4 rounded" to={`/sponsered-child/${child._id}`} key={child._id}>
            <LazyImage cName="h-[300px]" src={child.image} alt='' />
            <div className="flex flex-col items-center justify-end absolute h-full w-full top-0 left-0 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-8">
              <span className="block text-2xl">{child.name}</span>
              <button className="block border px-3 p-1 mt-3">Read more</button>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link className="flex bg-rose-500 md:font-semibold md:text-xl text-white rounded px-4 py-3" to='/sponsor-child'>Children waiting for sponsorship</Link>
      </div>
    </div>
  )
}


