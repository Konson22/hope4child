
interface inputProps {
    placeholder:string;
    cName?:string;
}


export const Input:React.FC<inputProps> = ({ placeholder, cName='bg-white'}) => {
  return (
    <input className={`h-[3.5rem] w-full rounded-md px-3 ${cName}`} placeholder={placeholder} />
  )
}
