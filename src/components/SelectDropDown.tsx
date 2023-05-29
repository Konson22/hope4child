
interface Props {
  options:string[];
  cName?:string;
}

export const SelectDropDown:React.FC<Props> = ({ options, cName='h-[3.5rem]' }) => {
  return (
    <select className={`w-full bg-white border border-slate-300 rounded-md px-3 ${cName}`}>
      {options.map((opt, index) => (
        <option value={opt} key={index}>{opt}</option>
      ))}
    </select>
  )
}
