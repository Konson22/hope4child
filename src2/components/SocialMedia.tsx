import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"


export default function SocialMedia({ cName }:{cName:string}) {
  return (
    <div className="flex items-center">
        <span className={`${cName} ml-6`}>
            <FaYoutube />
        </span>
        <span className={`${cName} ml-6`}>
            <FaInstagram />
        </span>
        <span className={`${cName} ml-6`}>
            <FaTwitter />
        </span>
        <span className={`${cName} ml-6`}>
            <FaFacebook />
        </span>
        {/* <img className="h-7 w-7" src={process.env.PUBLIC_URL+'/images/social-media//twitter.png'} alt='' />
        <img className="h-7 w-7 mx-6" src={process.env.PUBLIC_URL+'/images/social-media//facebook.png'} alt='' />
        <img className="h-7 w-7" src={process.env.PUBLIC_URL+'/images/social-media//instagram2.png'} alt='' />
        <img className="h-7 w-7 mx-6" src={process.env.PUBLIC_URL+'/images/social-media//youtube.png'} alt='' /> */}
    </div>
  )
}
