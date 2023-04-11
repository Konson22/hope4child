import SocialMedia from '../components/SocialMedia'
import ContactForm from './forms/ContactForm'


export default function Volunteer() {

  const bgImage = process.env.PUBLIC_URL+'./images/volunteer.jpeg'

  return (
    <>
      <div className="md:h-[40vh] h-[25vh]" 
        style={{backgroundImage:`url('${bgImage}')`, backgroundSize:'cover', backgroundPosition:'center'}}
      >

      </div>
      <div className="md:px-[12%] px-3 md:flex my-4">
        <div className="flex-1">
          <p>
            Are you student who want to make a difference in the lives of orphaned children and abandoned children?
          </p>
        </div>
        <div className="md:w-[40%] bg-amber-200 p-8">
          <SocialMedia />
          <ContactForm />
        </div>
      </div>
    </>
  )
}
