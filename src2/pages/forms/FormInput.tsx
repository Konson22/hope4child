
interface formProps {
    placeholder:string;
    bg?:string;
}

export default function FormInput({ placeholder, bg } : formProps) {
  return (
    <input className={`h-[3rem] w-full px-3 border-none ${bg}`} placeholder={placeholder} />
  )
}
