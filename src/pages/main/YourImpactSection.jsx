import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export const YourImpactSection = () => {

  return(
    <div className='md:px-[8%] px-3 md:py-[4rem] py-[1.5rem]'>
      <h1 className="text-4xl font-semibold text-center">What We Focus On</h1>
      <div className="lg:grid grid-cols-3 gap-8 mt-8">
        {impactData.map(impact => (
          <div className="border bg-gray-50 shadow-sm mt-4">
            <img src={impact.image} alt="" className="h-[200px]" />
            <div className="p-4">
              <p className="text-2xl">{impact.title}</p>
              <p className='elips-text l4'>{impact.text}</p>
              <button className="px-3 py-2 bg-sky-500 text-white rounded mt-4">
                <Link className='flex items-center' to={impact.path}>
                  Read more <FiArrowRight className='ml-1' />
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   )
  }


const impactData = [
  {
    title:'Education',
    text:'Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time helps children and youth set their own goals to build a life free from poverty.',
    image:process.env.PUBLIC_URL+'/images/education.jpg',
    path:'/education'
  },
  {
    title:'Health and Nutrition',
    text:'When you sponsor a child, you create a powerful multiplier effect. You help them see beyond the daily struggles of life in poverty. Your support releases them from a cycle of short-term decisions and helps them gain the ability to begin contributing to their own families and communities.',
    image:process.env.PUBLIC_URL+'/images/health.jpeg',
    path:'/health'
  },
  {
    title:'Poverty free',
    text:'Sponsorship encompasses key programs specifically designed to address children’s toughest issues in their fight against poverty: getting and staying healthy, staying in school, and finding a stable job. You can help them overcome challenges they’d otherwise face for a lifetime.',
    image:process.env.PUBLIC_URL+'/images/proverty.jpg',
    path:'/education'
  },
]