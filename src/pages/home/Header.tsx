import SearchFilter from "components/SearchFilter"


export default function Header() {

  const bgImage = process.env.PUBLIC_URL+'./images/children-g1c4ec8142_1280.jpg'

  const SloganText = (
        <div className="flex-1 text-white">
            <h1 className="titlee md:text-6xl text-3xl font-bold">
                Giving the <span className="text-rose-600">street</span> 
                children’s right to <span className="text-rose-600">education</span>
            </h1>
        </div>
  )
  return (
    <>
    <div className="md:flex items-center px-[5%] md:pt-[4rem] pt-[6rem] md:pb-[4rem] pb-[10rem]"
        style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`, 
            backgroundSize:'cover', 
            backgroundPosition:'center'
        }}
    >
        {SloganText}
        <SearchFilter cName='md:block hidden' />
    </div>
    <div className="md:hidden block px-4 mt-[-8rem]">
        <SearchFilter cName='' />
    </div>
    </>
  )
}
