

export const HowToHelpSection = (props) => {
  return(
    <div className='md:px-[8%] px-3 py-[4rem]'>
      <h1 className="text-4xl font-semibold text-center">How To Help?</h1>
      <div className="lg:grid grid-cols-3 gap-4 mt-8">
        {data.map(d => (
          <div className="bg-white text-center p-4 mt-4">
            <img className="h-[180px] w-[180px] rounded-fulll mx-auto my-0" src={d.image} alt='' />
            <h3 className="text-2xl font-semibold mb-2 mt-4">{d.title}</h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </div>
   )
  }


  const data = [
      {
        title:'Sponsor Child',
        text:'Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being',
        image:process.env.PUBLIC_URL+'/images/donate.jpg'
      },
      {
        title:'Help Child',
        text:'Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being',
        image:process.env.PUBLIC_URL+'/images/hunger.png'
      },
      {
        title:'Volunteer',
        text:'Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being',
        image:process.env.PUBLIC_URL+'/images/population.png'
      },
  ]