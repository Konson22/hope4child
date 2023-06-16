import { Link } from "react-router-dom";

export function Button1({ text, cName }:{ text:string; cName?:string}) {
  return (
    <button className={`px-5 py-2 rounded bg-rose-600 text-white ${cName}`}>{text}</button>
  )
}

export function LinkButton1({ text, cName, path }:{ text:string; path:string; cName?:string}) {
  return (
    <Link className={`px-5 py-2 rounded bg-rose-600 text-white ${cName}`} to={path}>
        {text}
    </Link>
  )
}
