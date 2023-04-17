import Carousel from 'react-elastic-carousel'
import { ChildCard } from '../../components/ChildCard';
import { useChildren } from '../../contexts/ChildrenContextProvider';

const breakPoints = [
  {
    width:0,
    itemsToShow:2,
    itemsToScroll:1
  },
  {
    width:500,
    itemsToShow:5,
    itemsToScroll:1,
    itemPadding:[0,6,0,6]
  },
]


export default function ChildrenSection() {

  const { loading, childrenData } = useChildren();

  return(
    <div className='lg:px-[8%] py-8'>
      <div className="mx-3 flex items-center justify-between">
        <h3 className="lg:text-3xl text-xl font-semibold">Sponsor Child</h3>
      </div>
      <div className="my-[1.5rem]">
        {loading && 'Loading...'}
        {(childrenData.length >= 1) &&
          <Carousel 
            className='children-slide-wraper relative'
            breakPoints={breakPoints} 
            initialFirstItem={0} 
            initialActiveIndex={0}
          >
            {childrenData.map(child => <ChildCard child={child} cName='mx-2' />)}
          </Carousel>
        }
      </div>
    </div>
  )
}
