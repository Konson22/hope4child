
interface buttonPorps {
    bg?:string;
    text:string;
    Icon?:(props: React.ComponentProps<'svg'>) => JSX.Element;
    cName?:string;
}

export function Button({ text, bg='bg-rose-500 text-white', Icon, cName} : buttonPorps) {
  return (
    <button className={`flex items-center px-3 py-2 rounded ${bg} ${cName}`}>
      {text}
      {Icon && <Icon className="ml-2" />}
    </button>
  )
}

export function ButtonSm({ text, bg='bg-rose-500 text-white', Icon, cName} : buttonPorps) {
  return (
    <button className={`flex items-center px-3 py-1 rounded ${bg} ${cName}`}>
      {text}
      {Icon && <Icon className="ml-2" />}
    </button>
  )
}
