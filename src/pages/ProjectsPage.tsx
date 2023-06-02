import { Title3 } from "components/HeadingTitle"
import DonateForm from "./forms/DonateForm"
import { Header } from "components/Header"
import { projectsData } from "assets/data"


export default function ProjectsPage() {

  return (
    <div>
        <Header 
            image="./images/team.jpg" 
            cName='py-[7rem] b-[7rem]'
            text="Our projects aim to put an end to the violations of children’s rights" 
        />
        <div className="md:px-[5%] px-3 py-5 flex">
            <div className="flex-1 mr-8">
               {projectsData.map(project => (
                <div className="flex mb-8 bg-white rounded overflow-hidden">
                    <img className="w-[250px]" src={project.image} alt="" />
                    <div className="flex-1 p-4">
                        <span className="block text-2xl mb-2">{project.title}</span>
                        <p className="line-clamp-6">{project.description}</p>
                        <button className="bg-rose-500 text-white px-3 py-1 mt-3">Learn more</button>
                    </div>
                </div>
               ))}
            </div>
            <div className="w-[35%] md:block hidden">
                <DonateForm />
            </div>
        </div>
    </div>
  )
}
