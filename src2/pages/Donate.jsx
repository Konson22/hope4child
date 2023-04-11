import DonateForm from './forms/DonateForm'

export default function Donate() {
    const bgImage = process.env.PUBLIC_URL+'./images/refugee-childern.jpeg'
  return (
    <div>
        <header className="md:px-[8%] px-3 md:pt-[7rem] md:pb-[7rem] pt-[2rem] pb-[6rem] bg-sky-300"
            style={{backgroundImage:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
        >
            <div className="md:w-[60%]">
                <h1 className="md:text-5xl text-white font-semibold">When you sponsor a child, you create a powerful multiplier effect.</h1>
            </div>
        </header>
        <div className="flex md:px-[8%] px-5 mb-8">
            <div className="md:block hidden flex-1 p-8">
                <p className='text-xl'>
                    Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time helps children and youth set their own goals to build a life free from poverty.
                </p>
            </div>
            <div className="md:w-[40%] w-full md:p-10 p-4 md:mt-[-11rem] mt-[-4rem] bg-sky-500 rounded shadow-md">
                <DonateForm />
            </div>
        </div>
    </div>
  )
}
