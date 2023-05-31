
interface Props {
    image:string;
    text:string;
    cName?:string;
}

export const Header:React.FC<Props> = ({ cName, image, text }) => {
  return (
    <div
        className={`px-[15%] ${cName} text-white`}
        style={{
            backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), 
            url('${process.env.PUBLIC_URL+image}')`, 
            backgroundSize:'cover', 
            backgroundPosition:'center'
        }}
    >
        <h1 className="md:text-6xl text-2xl font-bold mb-4">{text}</h1>
    </div>
  )
}
