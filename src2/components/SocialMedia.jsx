import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className="flex items-center justify-evenly">
        <span className="text-2xl bg-gray-200 p-3">
            <FaFacebook />
        </span>
        <span className="text-2xl bg-gray-200 p-3">
            <FaInstagram />
        </span>
        <span className="text-2xl bg-gray-200 p-3">
            <FaLinkedinIn />
        </span>
        <span className="text-2xl bg-gray-200 p-3">
            <FaTwitter />
        </span>
        <span className="text-2xl bg-gray-200 p-3">
            <FaLinkedinIn />
        </span>
    </div>
  )
}
