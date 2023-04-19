import DonateForm from "./forms/DonateForm"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Donate() {

  const bgImage = process.env.PUBLIC_URL+'./images/group-african-kids-learning-together.jpg'

  return (
    <>
      <header className="header-container flex items-center md:py-[6rem] py-[3rem] px-[9%] text-white z-20"
        style={{
          backgroundImage:`linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'
        }}
      >
        <h1 className="md:text-5xl text-xl font-bold md:w-[60%]">
          Your support gives a child life-changing opportunity to develope spiritually, emotionally
          {/* As you offer encouragument and support your love will ignite a life time of hope for a child */}
        </h1>
      </header>
      <div className="md:flex md:px-[13%] px-4 md:py-12 p-6">
        <div className="md:w-[45%] bg-gray-200 md:p-10 p-6">
          <DonateForm />
          <PayPalScriptProvider>
            <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>
        <div className="flex-1 md:ml-10 md:mt-0 mt-6">
          <h3 className="text-4xl font-bold">Your donation provides</h3>
          <div className="flex items-center mt-6">
            <img className="h-[60px] w-[60px]" src={process.env.PUBLIC_URL+'/images/health.png'} alt='' />
            <div className="ml-5">
              <h4 className="text-xl font-bold">Health care</h4>
              <p>
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <img className="h-[60px] w-[60px]" src={process.env.PUBLIC_URL+'/images/population.png'} alt='' />
            <div className="ml-5">
              <h4 className="text-xl font-bold">Hygeen Training</h4>
              <p>
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <img className="h-[60px] w-[60px]" src={process.env.PUBLIC_URL+'/images/health.png'} alt='' />
            <div className="ml-5">
              <h4 className="text-xl font-bold">Health care</h4>
              <p>
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <img className="h-[60px] w-[60px]" src={process.env.PUBLIC_URL+'/images/population.png'} alt='' />
            <div className="ml-5">
              <h4 className="text-xl font-bold">Health care</h4>
              <p>
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
