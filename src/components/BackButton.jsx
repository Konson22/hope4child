import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function BackButton({ title }) {

    const navigate = useNavigate()

  return (
    <div className="flex items-center bg-black bg-opacity-20 text-white p-3">
        <div className="" onClick={() => navigate(-1)}>
            <FiChevronLeft className="text-2xl mr-4" />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  )
}
