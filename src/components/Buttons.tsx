

export function Button({ text, cName }: { text:string, cName?:string}) {
  return (
    <button className={`${cName} bg-main2 border rounded text-white px-6 py-2`}>
      {text}
    </button>
  )
}
