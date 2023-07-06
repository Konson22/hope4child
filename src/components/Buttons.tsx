<<<<<<< HEAD
import React from "react"

export default function Button({ text, cName }: { text:string, cName?:string}) {
=======
import React from "react";


export function Button({ text, cName }: { text:string, cName?:string}) {
>>>>>>> cc9730ebe9ac7af5213abce6bec78524393c4e25
  return (
    <button className={`${cName} bg-main2 border rounded text-white px-6 py-2`}>
      {text}
    </button>
  )
}
