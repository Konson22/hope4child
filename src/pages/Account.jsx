
export default function Account() {
  return (
    <div className="md:flex md:px-[8%] md:py-4">
        <div className="md:p-10 p-4 md:block flex bg-gray-100 shadow-md">
            <img 
                className="md:h-[250px] h-[100px] md:w-[250px] w-[100px] rounded-full" 
                src={process.env.PUBLIC_URL+'/images/ring.jpg'} 
                alt="" 
            />
            <div className="md:ml-0 ml-3">
                <span className="block text-3xl">Kon Akech</span>
                <span className="block my-1">Sponsered (2)</span>
                <span className="">Donation (2)</span>
            </div>
        </div>
        <div className="flex-1">
            <div className="">
                <span className="px-4 py-2">My Sponsor</span>
                <span className="px-4 py-2">My Donation</span>
                <span className="px-4 py-2">Child</span>
            </div>
        </div>
    </div>
  )
}
