
export default function Logo() {
  return (
    <div className="flex items-center flex-1">
      <img className="md:h-[3rem] h-[2.6rem] w-[3rem]" src={process.env.PUBLIC_URL+'./images/pngegg.png'} alt="" />
      <h2 className="flex items-center md:text-2xl text-base ml-3">H<span className="text-4xl text-red-500">4</span> Child</h2>
    </div>
  )
}
