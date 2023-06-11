

export function HeadingText1({ text, cName }: { text:string, cName?:string }) {
  return (
    <h2 className={`md:text-4xl text-xl font-bold ${cName}`}>{text}</h2>
  )
}

export function HeadingText2({ text, cName }: { text:string, cName?:string }) {
  return (
    <h3 className={`md:text-2xl text-xl font-bold ${cName}`}>{text}</h3>
  )
}

export function HeadingText3({ text, cName }: { text:string, cName?:string }) {
  return (
    <h4 className={`md:text-xl text-base font-bold ${cName}`}>{text}</h4>
  )
}
