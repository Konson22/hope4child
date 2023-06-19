import FormInput from "./FormInput"


export default function SponsorForm() {
  return (
    <div className="flex px-[10%] py-6">
        <div className="flex-1"></div>
        <div className="flex-1 bg-slate-100 p-6">
            <form>
                {data.map(field => (
                    <div className="mb-5" key={field.name}>
                        <FormInput placeholder={field.placeholder} />
                    </div>
                ))}
            </form>
        </div>
    </div>
  )
}


const data = [
    {name:'', placeholder:'Name'},
    {name:'', placeholder:'Name'},
    {name:'', placeholder:'Name'},
    {name:'', placeholder:'Name'},
    {name:'', placeholder:'Name'},
    {name:'', placeholder:'Name'},
    {name:'', placeholder:'Name'},
]