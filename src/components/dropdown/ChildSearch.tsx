import Slider from "rc-slider";
import { childSearchProps, sliderrchProps } from "util/Types";
import 'rc-slider/assets/index.css';

export function ChildSearch({ selectedGender, setSelectedGender, cName } : childSearchProps){

    const genderData = ['Either', 'Boy', 'Girl']

    return(
        <div className="">
            <span className="block mb-1">I am intrested in</span>
            <div className="flex justify-between">
                {genderData.map((gender:string) => (
                <div 
                    className={`
                        px-5 py-2 border rounded cursor-pointer hover:bg-cyan-600 hover:text-white
                        ${selectedGender === gender ? 'bg-cyan-600 text-white':''} ${cName}
                    `} 
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                >
                    {gender}
                </div>
                ))}
            </div>
        </div>
    )
}


export function AgeSlider({ selectedAge, handleSlide } : sliderrchProps){
    return(
        <div className="mt-6">
            <span className="block mb-1">Age between</span>
            <Slider
              min={4}
              max={23}
              dotStyle={{height:'50px'}}
              defaultValue={selectedAge}
              onChange={ e => handleSlide(e)}
            />
        </div>
    )
}