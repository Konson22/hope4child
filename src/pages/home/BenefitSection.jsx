import { Heading1, Heading3 } from "../../util/HeadingTitles";
import { FaHandPointRight } from "react-icons/fa";

export default function BenefitSection() {
  return (
    <div className="md:px-[15%] px-4 my-16">
      <div className="md:px-[15%] text-center mb-10">
        <Heading1 text="Why Sponsor Education" />
        <p>
          Street children face a multitude of challenges every day, from lack of
          shelter and nutrition to exposure to dangerous environments. Without
          education, they are often trapped in a cycle of poverty, exploitation,
          and hopelessness. By sponsoring their education, you can provide them
          with the following life-changing benefits
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-6">
        {data.map((info) => (
          <div className="border shadow-lg">
            <div className="h-[250px]">
              <img src={info.image} alt="" />
            </div>
            <div className="p-5">
              <Heading3 text={info.title} />
              <p className="line-clamp-4">{info.text}</p>
              <button className="flex items-center border border-primary text-primary px-5 py-2 rounded-md mt-4">
                Learn more
                <FaHandPointRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "Education as a Pathway",
    text: `Education opens doors to a world of opportunities. It equips children with essential skills, knowledge, and confidence to pursue their dreams and achieve their full potential.
    `,
    image: process.env.PUBLIC_URL + "/images/sklills.jpg",
  },
  {
    title: "Empowering Independence",
    text: `With an education, these children gain the tools to become self-sufficient individuals, breaking free from the cycle of poverty and reliance on charity.
    `,
    image: process.env.PUBLIC_URL + "/images/social-integration.jpg",
  },
  {
    title: "Building Strong Foundations",
    text: `By investing in their education, you lay the groundwork for a brighter future, not just for the children themselves but also for their families and communities.`,
    image: process.env.PUBLIC_URL + "/images/exploitation.jpg",
  },
  {
    title: "Nurturing Dreams",
    text: `Education instills hope and nurtures dreams. It gives these children a chance to dream big, and with your support, they can turn those dreams into reality.`,
    image: process.env.PUBLIC_URL + "/images/social-integration.jpg",
  },
];

/*

const data = [
  {
    title: "Access to Education",
    text: `Education sponsorship programs ensure that street children have access to formal education or vocational training, empowering them with knowledge and skills that can transform their lives.`,
    image: process.env.PUBLIC_URL + "/images/education.jpg",
  },
  {
    title: "Empowerment",
    text: `Education empowers street children to believe in themselves and their capabilities, boosting their self-esteem and confidence.
    `,
    image:
      process.env.PUBLIC_URL + "/images/pexels-aissa-bouabellou-2406271.jpg",
  },
  {
    title: "Life Skills Development",
    text: `Along with academic education, sponsorship programs often include life skills training, such as communication, financial literacy, and problem-solving, which are essential for personal development.`,
    image: process.env.PUBLIC_URL + "/images/sklills.jpg",
  },
  {
    title: "Health and Nutrition",
    text: `Many sponsorship programs also address health and nutrition needs, ensuring that the children receive regular medical check-ups and adequate meals.`,
    image: process.env.PUBLIC_URL + "/images/social-integration.jpg",
  },
  {
    title: "Prevention of Exploitation",
    text: `Education sponsorship provides an alternative to exploitative labor or activities that street children might engage in to survive, reducing their vulnerability to abuse and exploitation.`,
    image: process.env.PUBLIC_URL + "/images/exploitation.jpg",
  },
  {
    title: "Social Integration",
    text: `Through education, street children can become more integrated into society, breaking away from the isolation and stigma often associated with their circumstances.
    `,
    image: process.env.PUBLIC_URL + "/images/social-integration.jpg",
  },
];
*/
