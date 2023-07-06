
export interface childInterface {
  id: number;
  age: string;
  gender: string;
  name: string;
  bio:string;
  state:string;
  parent_contact:string;
  image: string | undefined;
}

export interface stateSearchProps {
  selectedState:string;
  cName?:string;
  data:string[];
  setSelectedState:React.Dispatch<React.SetStateAction<string>>
}


export interface childSearchProps {
  selectedGender:string;
  cName?:string;
  setSelectedGender:React.Dispatch<React.SetStateAction<string>>
}


export interface ageProps {
  selectedAge:string;
  cName?:string;
  setSelectedAge:React.Dispatch<React.SetStateAction<string>>
}


export interface sliderrchProps {
  selectedAge:number;
  handleSlide:(e:any) => void
  cName?:string;
  setSelectedAge?:React.Dispatch<React.SetStateAction<string>>
}
