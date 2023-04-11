import { useEffect, useState } from "react"
import { ChildCard } from "../../components/ChildCard"
import { useChildren } from "../../contexts/ChildrenContextProvider"

export default function SponsorChild() {

  const { loading, childrenData } = useChildren()
  const [children, setChildren] = useState([])
  const [selectedGender, setSelectedGender] = useState('Either');
  const genderData = [ 'Either', 'male', 'female']

  useEffect(() => {
    childrenData.length >= 1 && setChildren(childrenData)
  }, [childrenData])


  useEffect(() => {
    if(selectedGender === 'Either'){
      setChildren(childrenData)
    }else{
      const results = childrenData.filter(child => child.gender === selectedGender)
      setChildren(results)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGender])
 


  let childrenConent

  if(loading){
    childrenConent = 'Loading...'
  }else{
    childrenConent = children.length >= 1 ? children.map(child => <ChildCard child={child} />) : 'No Children found!'
  }
 
  return (
    <>
      <div className="px-[5%] flex items-center justify-between py-6">
        <h1 className="text-2xl md:block hidden">Sponsor</h1>
        <div className="">
          <h3 className="md:block hidden mb-3">I am Intrested in sponsoring a</h3>
          <div className="flex justify-between">
            {genderData.map(gender => (
              <button 
                className={`
                  flex itemms-center justify-center border border-sky-600 md:px-8 px-4 md:py-[.3rem] py-[.2rem] mr-2 rounded-2xl 
                  ${selectedGender === gender ? 'bg-sky-600 text-white':''}
                `}
                onClick={() => setSelectedGender(gender)}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="px-[5%] lg:grid grid-cols-5 gap-4 lg:mt-6 mt-8">
        {childrenConent}
      </div>
    </>
  )
}

// const AgeDropDown = () => {

//   const [selectedAge, setSelectedAge] = useState('4 - 6');
//   const [isOpen, setIsOpen] = useState(false);
//   const ageData = ['4 - 6', '7 - 9', '10 - 12', '13 - 15', '16 - 18', '19 - 21']


//   return(
//     <div className="lg:mx-6 mx-2">
//       <h3 className="mb-3 md:block hidden">Age between</h3>
//       <div className="w-full border border-sky-600 md:px-6 px-3 md:py-[.3rem] py-[.2rem] flex items-center justify-center rounded-2xl relative"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="flex items-center">
//         </div>
//         {selectedAge}
//         <FiChevronDown className={`ml-2 duration-400 ${isOpen ? 'rotate-[180deg]':''}`} />
//         {isOpen &&
//           <div className="absolute top-full bg-white w-full text-gray-600 text-left">
//             {ageData.map(age => (
//               <div className="hover:bg-sky-500 hover:text-white px-4 py-2"
//                 onClick={() => setSelectedAge(age)}
//               >{age}</div>
//             ))}
//           </div>
//         }
//       </div>
//     </div>
//   )
// }

// const GenderDrowpDown = ({ handleSearchByGender }) => {

//   const [selectedGender, setSelectedGender] = useState('Either');
//   const genderData = [ 'Either', 'Boy', 'Girl']
//   handleSearchByGender(selectedGender)

//   return(
//     <div className="">
//       <h3 className="md:block hidden mb-3">I am Intrested in sponsoring a</h3>
//       <div className="flex justify-between">
//         {genderData.map(gender => (
//           <button 
//             className={`
//               flex itemms-center justify-center border border-sky-600 md:px-8 px-4 md:py-[.3rem] py-[.2rem] mr-2 rounded-2xl 
//               ${selectedGender === gender ? 'bg-sky-600 text-white':''}
//             `}
//             onClick={() => setSelectedGender(gender)}
//           >
//             {gender}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }
