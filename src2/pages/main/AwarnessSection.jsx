

export default function AwarnessSection() {
  return (
    <div className="flex items-center md:px-[8%] px-3 md:py-[4rem] py-[2rem]">
        <div className="flex-1">
            <h2 className="md:text-4xl text-base md:font-bold font-bold mb-3">How to help street children?</h2>
            <p>
                To reach out the problems of the street children and how to help street children who are facing a number of problems including protection, shelter, limited access to food and the education, we may go to them directly to know the intensity of their problems. We may not be able to help them out from getting them out of all their problems, but perhaps we can solve some of them.
            </p>
        </div>
        <img 
            className="md:w-[55%]" 
            src={process.env.PUBLIC_URL+'./images/0212HR0184STREET-CHILDREN.jpg'} 
            alt="" 
        />
    </div>
  )
}
