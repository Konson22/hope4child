
interface InputProps{
    type:string;
    name:string;
    placeholder:string;
    label?:string;
    options?:string[]
}

export default function FormInput({type, name, label, placeholder, options}: InputProps) {
  return (
    <>
    <label className="block m-1" htmlFor={name}>{label}</label>
    {type === 'select' ?
        <select className="h-[3.5rem] w-full bg-slate-50 border border-slate-200 rounded" name={name}>
            {options?.map(opt => (
                <option value={opt}>{opt}</option>
            ))}
        </select>
        :
        <input className="h-[3.5rem] w-full bg-slate-50 border border-slate-200 rounded" name={name} placeholder={placeholder} type={type} />
    }
    </>
  )
}
