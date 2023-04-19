import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { agesRangeData, statesData } from "../../assets/data";
import { ChildCard } from "../../components/ChildCard";
import { useChildren } from "../../contexts/ChildrenContextProvider";


export default function SponsorChild() {

    const { loading, childrenData } = useChildren();
    const [children, setChildren] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [openAgesDropDown, setOpenAgesDropDown] = useState(false);
    const [openStatesDropDown, setOpenStatesDropDown] = useState(false);

    useEffect(() => {
        if(childrenData && childrenData.lengt >= 1){
            setChildren(childrenData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        if(selectedGender === 'Either'){
            setChildren(childrenData);
        }else{
            const results = selectedGender && SearchForChild(childrenData, selectedGender, 'gender');
            (results && results.length > 0) ? setChildren(results) : setChildren([])
        }

    }, [selectedGender, childrenData]);
    
    
    let childrenConent

    if(loading){
        childrenConent = 'Loading...'
    }else{
        childrenConent = children.length >= 1 ? children.map(child => <ChildCard child={child} />) : 'No Children found!'
    }
  return (
    <>
        <div className="md:flex items-center justify-between md:px-[5%] px-3 md:py-8 py-4 bg-gray-1000">
            <h1 className="md:text-3xl font-bold">Choose Children to Sponsor!</h1>
            <div className="flex md:justify-start justify-between md:text-base text-sm md:mt-0 mt-4">
                <div className="">
                    I am intrested in
                    <div className="flex mt-1">
                        <span className="block md:px-4 px-3 md:py-2 py-1 border border-sky-500 rounded cursor-pointer"
                            onClick={() => setSelectedGender('Either')}
                            >
                            Either
                        </span>
                        <span className="block md:px-4 px-3 md:py-2 py-1 border border-sky-500 rounded cursor-pointer mx-2"
                            onClick={() => setSelectedGender('male')}
                            >
                            Boy
                        </span>
                        <span className="block md:px-4 px-3 md:py-2 py-1 border border-sky-500 rounded cursor-pointer"
                            onClick={() => setSelectedGender('female')}
                        >
                            Girl
                        </span>
                    </div>
                </div>
                <div className="md:mx-5">
                    Age between
                    <div className="flex items-center md:px-4 px-3 md:py-2 py-1 border border-sky-500 rounded relative cursor-pointer mt-1"
                        onClick={() => setOpenAgesDropDown(!openAgesDropDown)}
                    >
                        {selectedAge ? selectedAge : 'All Ages'}
                        <FiChevronDown className={`ml-1 duration-300 ${openAgesDropDown ? 'rotate-[180deg]':''}`} />
                        {openAgesDropDown && 
                            <div className="w-full absolute top-full left-0 bg-gray-100 rounded z-40">
                                {agesRangeData.map(age => (
                                    <div className="px-3 py-2" key={age} onClick={() => setSelectedAge(age)}>{age}</div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <div className="md:block hidden">
                    State
                    <div className="flex items-center md:px-5 px-3 md:py-2 py-1 border border-sky-500 rounded relative cursor-pointer mt-1"
                        onClick={() => setOpenStatesDropDown(!openStatesDropDown)}
                    >
                        {selectedState ? `Seleced ${selectedState}` : 'All States'}
                        <FiChevronDown className={`ml-1 duration-300 ${openStatesDropDown ? 'rotate-[180deg]':''}`} />
                        {openStatesDropDown &&
                            <div className="w-full absolute top-full left-0 bg-gray-100 rounded z-40">
                                <span 
                                    className="block px-4 py-2 hover:bg-dark-teal hover:text-white" 
                                    onClick={() => setSelectedState('All')}
                                >
                                    All States
                                </span>
                                {statesData.map(state => (
                                    <span 
                                        className="block px-4 py-2 hover:bg-dark-teal hover:text-white" 
                                        key={state}
                                        onClick={() => setSelectedState(state)}
                                    >
                                        {state}
                                    </span>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="px-[5%] lg:grid grid-cols-5 gap-4 lg:mt-8 mt-8">
            { childrenConent }
        </div>
    </>
  )
}

function SearchForChild(data, param, category){
    if(data.length > 0){
        return data.filter(child => child[category] === param);
    }
}

