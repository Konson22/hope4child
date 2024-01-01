import { Link } from "react-router-dom"


export default function Header() {

    const formContent = (cName) => {
        return(
            <div className={`md:w-[35%] md:bg-white/50 bg-primary backdrop-blure-md md:p-9 p-5 ${cName}`}>
                <h2 className="text-2xl md:mb-5 mb-4">Join Us in Making a Difference</h2>
                <form>
                    <div className="mb-5">
                    <input className="h-[3rem] w-full px-3" type="text" placeholder="Choose State" />
                    </div>
                    <div className="mb-5">
                    <input className="h-[3rem] w-full px-3" type="text" placeholder="Choose Gender" />
                    </div>
                    <div className="mb-5">
                    <input className="h-[3rem] w-full px-3" type="text" placeholder="Choose Age" />
                    </div>
                    <button className="bg-rose-500 text-white w-full rounded px-5 py-2">Match your child</button>
                </form>
            </div>
        )
    }
  return (
    <div className="">
        <header 
            className="
                clip-path md:py-[6rem] pt-[3rem] pb-[6rem] md:flex items-center bg-primar text-white 
                md:px-[5%] px-3
            "
            style={{
                backgroundImage:`
                    linear-gradient(rgba(7, 170, 192, .15), rgba(7, 170, 192,.15)), 
                    url(${process.env.PUBLIC_URL+'/images/pexels-jorge-acre-16624869.jpg'})
                `,
                backgroundSize:'cover',
                backgroundPosition:'center'
            }}
        >
            <div className="flex-1">
                <h1 className="md:text-6xl text-4xl font-bold">
                    Giving street children a chance to dream big
                </h1>
                <p className="md:text-3xl">
                    Your kindness and generosity will leave a lasting mark on these young hearts.
                </p>
                <div className="mt-8">
                    <Link className="bg-rose-600 md:text-xl text-white rounded px-4 py-3" to='/children'>
                        Sponsor Now
                    </Link>
                </div>
            </div>
            {formContent('md:block hidden')}
        </header>
        {formContent('md:hidden text-white block mt-[-4rem] mx-3 rounded-md')}
    </div>
  )
}
