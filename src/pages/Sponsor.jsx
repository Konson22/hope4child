import DonateForm from "./forms/DonateForm"

export default function Sponsor() {

  const bgImage = process.env.PUBLIC_URL+'./images/group-african-kids-learning-together.jpg'

  return (
    <div>
        <header className="header-container flex items-center md:py-[6rem] py-[3rem] px-[9%] text-white z-20"
            style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'
            }}
        >
            <h1 className="md:text-6xl text-xl font-bold md:w-[70%]">
                You can help end proverty for good by Sponsoring a child
                {/* Each child pictured urgently needs a sponsor as you offer encouragement and support your love will ignite life-time hope */}
            </h1>
        </header>
        <div className="flex px-[10%] py-8">
            <div className="flex-1">
                <p>
                    When you sponsor a child you're personally connected with a child who will know your name and the thought that you care about them
                </p>
                <p>
                    Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good.
                </p>
            </div>
            <div className="md:w-[45%] bg-gray-200 md:p-10 p-6 ml-6 md:block hidden">
                <DonateForm />
            </div>
        </div>
    </div>
  )
}
