import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

export default function SocialMediaSection() {
  return (
    <div className="bg-primary text-white md:mx-[8%] mt-[2rem] py-[3rem] rounded-md">
        <div className="md:px-[19%] text-center">
            <h3 className="md:text-4xl text-3xl font-bold">Follow Us on Social Media</h3>
            <p>Stay updated with our latest news, success stories, and events by following us on social media. Join our online community and be a part of the change.</p>
            <div className="flex justify-evenly mt-7">
                <span className="md:text-4xl text-xl border rounded-full p-3">
                    <FaInstagram />
                </span>
                <span className="md:text-4xl text-xl border rounded-full p-3">
                    <FaFacebook />
                </span>
                <span className="md:text-4xl text-xl border rounded-full p-3">
                    <FaTwitter />
                </span>
                <span className="md:text-4xl text-xl border rounded-full p-3">
                    <FaTwitter />
                </span>
                <span className="md:text-4xl text-xl border rounded-full p-3">
                    <FaLinkedin />
                </span>
                <span className="md:text-4xl text-xl border rounded-full p-3">
                    <FaYoutube />
                </span>
            </div>
        </div>
    </div>
  )
}
