

export default function Heading({ text, cName }:{ text:string; cName?:string}) {
  return (
    <h2 className={`text-4xl font-bold ${cName}`}>{text}</h2>
  )
}
