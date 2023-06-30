import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";


export default function Footer() {
  return (
    <div className="bg-main md:flex justify-between text-white px-[8%] py-[3rem]">
      <div className="">
        <h4 className="text-xl">Sponsor child</h4>
      </div>
      <div className="">
        <h4 className="text-xl">Donate</h4>
      </div>
      <div className="">
        <h4 className="text-xl">Get Involved</h4>
      </div>
      <div className="">
        <h4 className="text-xl">Contact us</h4>
        <ul>
          <li className="flex items-center my-3">
            <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
              <FiPhoneCall />
            </span>
            +211920079070
          </li>
          <li className="flex items-center my-3">
            <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
              <FaWhatsapp />
            </span>
            +211920079070
          </li>
          <li className="flex items-center my-3">
            <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
              <FiMail />
            </span>
            +211920079070
          </li>
        </ul>
        <div className="flex my-8">
          <div className="h-10 w-10">
            <img src={process.env.PUBLIC_URL+'./images/social-media/instagram2.png'} alt="" />
          </div>
          <div className="h-10 w-10 mx-3">
            <img src={process.env.PUBLIC_URL+'./images/social-media/twitter.png'} alt="" />
          </div>
          <div className="h-10 w-10 mr-3">
            <img src={process.env.PUBLIC_URL+'./images/social-media/facebook.png'} alt="" />
          </div>
          <div className="h-10 w-10">
            <img src={process.env.PUBLIC_URL+'./images/social-media/youtube.png'} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
