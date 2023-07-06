import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";


export default function Footer() {
  return (
    <div className="bg-main text-white md:px-[8%] px-3 py-[1rem]">
      <div className="md:flex justify-between mt-6">
        <div className="flex-1 md:mr-16">
          <h4 className="md:text-xl font-bold border-b-2 border-main2 w-[max-content] pb-1">Our Mission</h4>
          <p>
            No matter how street life is defined, one thing remains the same: all are at risk of disease, violence, becoming addicted to alcohol and drugs and being trafficked or sold into prostitution.
          </p>
        </div>
        <div className="md:my-0 my-7">
          <h4 className="md:text-xl font-bold border-b-2 border-main2 w-[max-content] pb-1">Get Involved</h4>
          <ul>
            <li className="my-3">
              Support our work
            </li>
            <li className="my-3">
              Become a member
            </li>
            <li className="my-3">
              Volunteer with us
            </li>
            <li className="my-3">
              Support our work
            </li>
          </ul>
        </div>
        <div className="md:mx-16">
          <h4 className="md:text-xl font-bold border-b-2 border-main2 w-[max-content] pb-1">Policy & Privacy</h4>
          <ul>
            <li className="my-3">
              Policy
            </li>
            <li className="my-3">
              Privacy
            </li>
            <li className="my-3">
              Volunteer with us
            </li>
          </ul>
        </div>
        <div className="md:my-0 my-7">
          <h4 className="md:text-xl font-bold border-b-2 border-main2 w-[max-content] pb-1">Contact & Address</h4>
          <ul>
            <li className="flex items-center my-3">
              <span className="h-8 w-8 flex items-center justify-center border rounded-full mr-2">
                <FaMapMarkerAlt />
              </span>
              Stem center next to SSBC
            </li>
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
          <div className="my-8">
            <h3 className="text-xl">Follow us on</h3>
            <div className="flex mt-4">
              <div className="md:h-10 h-7 md:w-10 w-7">
                <img src={process.env.PUBLIC_URL+'./images/social-media/instagram2.png'} alt="" />
              </div>
              <div className="md:h-10 h-7 md:w-10 w-7 mx-3">
                <img src={process.env.PUBLIC_URL+'./images/social-media/twitter.png'} alt="" />
              </div>
              <div className="md:h-10 h-7 md:w-10 w-7 mr-3">
                <img src={process.env.PUBLIC_URL+'./images/social-media/facebook.png'} alt="" />
              </div>
              <div className="md:h-10 h-7 md:w-10 w-7">
                <img src={process.env.PUBLIC_URL+'./images/social-media/youtube.png'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t-2 border-mainlight pt-4">
        &copy; Copyright reserved for Hope4Child 2023
      </div>
    </div>
  )
}
