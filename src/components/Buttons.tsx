import React from 'react'

interface buttonProps {
    text:string;
    cName?:string;
    bg?:string;
    Icon?:(props: React.ComponentProps<'svg'>) => JSX.Element;
}

export const Button:React.FC<buttonProps> = ({ text, Icon, cName}) => {
  return (
    <button className={`flex items-center rounded text-white bg-rose-500 px-4 py-3 text-sm ${cName}`}>
      {text}
      {Icon && <Icon className='h-4 ml-2' />}
    </button>
  )
}

export const MyButton:React.FC<buttonProps> = ({ text, Icon, bg='bg-rose-500', cName='px-4 py-2'}) => {
  return (
    <button className={`flex items-center rounded text-white ${bg} ${cName}`}>
      {text}
      {Icon && <Icon className='h-4 ml-2' />}
    </button>
  )
}
