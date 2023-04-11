
export default function EducationPage() {

    const bgImage = process.env.PUBLIC_URL+'./images/refugee-childern.jpeg'

    return (
      <>
        <div className="px-[8%] lg:py-[5rem] py-[3rem]" 
            style={{backgroundImage:`url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
        >
            <p className='md:w-[60%] lg:text-6xl font-bold text-white font-sans'>
                Every contribution makes a real difference
            </p>
        </div>
        <div className="md:flex md:px-[8%] px-3 my-5">
            <div className="flex-1">
                <p>
                    Growing up in poverty, children face tough challenges: hunger and malnutrition, limited access to education and medical services, social discrimination and isolation. But with charity from people like you, we can help children get the health care, education, life skills, job-readiness training and confidence they need to create lasting change in their lives and communities. Together, we can end poverty for good.
                </p>
            </div>
            <div className="flex-1"></div>
        </div>
      </>
    )
  }
  