

export default function ContactSection() {
  return (
    <div className="flex md:mx-[8%] bg-primary md:text-white md:p-0 p-5 md:mt-[4rem]">
        <div className="md:w-[40%] md:bg-primary bg-lightgray md:p-10 p-5">
            <h2 className="text-3xl">Get in Touch</h2>
            <p className="my-3">
                If you have any questions, suggestions, or would like to learn more about our Street Children Education Sponsorship Program, please feel free to reach out to us. We would love to hear from you!
            </p>
            <div className="">
                <form>
                    <div className="mb-5">
                        <input 
                            className="bg-white h-[3rem] w-full border-none px-3" 
                            type="text" 
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            className="bg-white h-[3rem] w-full border-none px-3" 
                            type="text" 
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="mb-5">
                        <textarea 
                            className="bg-white h-[6.5rem] w-full border-none px-3" 
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button className="w-full bg-secondary text-white py-2 mt-2">Send</button>
                </form>
            </div>
        </div>
        <div 
            className="flex-1 md:block hidden"
            style={{
                backgroundImage:`
                linear-gradient(rgba(7, 170, 192, .15), rgba(7, 170, 192,.15)), 
                url(${process.env.PUBLIC_URL+'/images/pexels-jorge-acre-16624869.jpg'})
                `,
                backgroundSize:'cover',
                backgroundPosition:'center'
          }}
        ></div>
    </div>
  )
}
