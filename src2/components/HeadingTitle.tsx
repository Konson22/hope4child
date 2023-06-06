
interface TitleProps {
    text:string;
    cName?:string;
}

export const Title1:React.FC<TitleProps> = ({ text, cName }) => {
  return (
    <h2 className={`md:text-4xl text-2xl font-bold text-neutral-500 ${cName}`}>{text}</h2>
  )
}

export const Title2:React.FC<TitleProps> = ({ text, cName }) => {
  return (
    <h2 className={`text-4xl font-bold ${cName}`}>{text}</h2>
  )
}

export const Title3:React.FC<TitleProps> = ({ text, cName }) => {
  return (
    <h2 className={`md:text-2xl text-xl font-bold ${cName}`}>{text}</h2>
  )
}
