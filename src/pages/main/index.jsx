import Header from "./Header";
import { OurTeamSection } from "./OurTeamSection";
import { SponsorSection } from "./SponsorSection";
import { YourImpactSection } from "./YourImpactSection";

import { HowToHelpSection } from "./HowToHelpSection";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="md:px-[20%] px-3 md:py-[3rem] py-[2rem]">
        <div className="md:text-center">
          <h2 className="md:text-2xl">Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good.</h2>
        </div>
      </div>
      <div className="bg-sky-800">
        <svg id="wave" viewBox="0 0 1440 190" version="1.1" xmlns="http://www.w3.org/2000/svg" className='rotate-[180deg]'>
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 255, 255)" offset="0%"></stop>
            <stop stop-color="rgb(255, 255, 255)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient-0)" d="M0,19L720,57L1440,19L2160,57L2880,171L3600,0L4320,114L5040,57L5760,114L6480,38L7200,95L7920,0L8640,152L9360,19L10080,171L10800,38L11520,171L12240,38L12960,38L13680,76L14400,133L15120,19L15840,133L16560,0L17280,171L17280,190L16560,190L15840,190L15120,190L14400,190L13680,190L12960,190L12240,190L11520,190L10800,190L10080,190L9360,190L8640,190L7920,190L7200,190L6480,190L5760,190L5040,190L4320,190L3600,190L2880,190L2160,190L1440,190L720,190L0,190Z">
          </path>
        </svg>
        <div className="py-12 bg-sky-800">
          ff
        </div>
        <svg id="wave" viewBox="0 0 1440 190" version="1.1" xmlns="http://www.w3.org/2000/svg" className=''>
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 179, 11, 1)" offset="0%"></stop>
            <stop stop-color="rgb( 255, 255, 255)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient-0)" d="M0,19L720,57L1440,19L2160,57L2880,171L3600,0L4320,114L5040,57L5760,114L6480,38L7200,95L7920,0L8640,152L9360,19L10080,171L10800,38L11520,171L12240,38L12960,38L13680,76L14400,133L15120,19L15840,133L16560,0L17280,171L17280,190L16560,190L15840,190L15120,190L14400,190L13680,190L12960,190L12240,190L11520,190L10800,190L10080,190L9360,190L8640,190L7920,190L7200,190L6480,190L5760,190L5040,190L4320,190L3600,190L2880,190L2160,190L1440,190L720,190L0,190Z">
          </path>
        </svg>
      </div>
      <YourImpactSection />
      <SponsorSection />
      <HowToHelpSection />
      <OurTeamSection />
      
    </>
  )
}
