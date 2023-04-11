

export function OurTeamSection() {
    return(
        <div className="lg:flex lg:px-[14%] px-3 lg:py-[5rem] py-[2rem]">
            <div className="flex-1">
            <img className='h-[350pxcc] w-full' src={process.env.PUBLIC_URL+'./images/team.jpeg'} alt='' />
            </div>
            <div className="flex-1 lg:ml-10">
            <h1 className="lg:text-4xl text-2xl font-bold">Powered by Volunteer</h1>
            <h2 className="text-xl">
                hope for good is busy and vibrant place to work and there is always room for volunteers to join us and help out just bring your time and energy to make difference experience to child
            </h2>
            </div>
        </div>
     )
}
  