

export function Heading1({ text, cName } : {text:string; cName?:string}) {
  return (
    <h2 className={`md:text-4xl text-xl font-bold ${cName}`}>{text}</h2>
  )
}

export function Heading2({ text, cName } : {text:string; cName?:string}) {
  return (
    <h2 className={`text-2xl font-bold ${cName}`}>{text}</h2>
  )
}

export function Heading3({ text, cName } : {text:string; cName?:string}) {
  return (
    <h2 className={`text-x font-bold ${cName}`}>{text}</h2>
  )
}
