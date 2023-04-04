import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function BackButton({ title }) {

    const navigate = useNavigate()

  return (
    <div className="flex items-center bg-black bg-opacity-20 p-3">
        <div className="" onClick={() => navigate(-1)}>
            <FiChevronLeft className="text-2xl mr-4" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  )
}
