import { FaHandPointRight } from "react-icons/fa";
import { Heading1, Heading3 } from "../../util/HeadingTitles";

export default function WhySponsorshipMatterSection() {
  return (
    <div className="px-[10%] my-14">
      <div className="text-center px-[15%]">
        <Heading1 text="Why Sponsorship Matters" />
        <p>
          Sponsoring a street child or orphan goes beyond financial support. It
          means providing a stable and nurturing environment where they can
          grow, learn, and thrive. Your sponsorship can cover essentials like
          education, healthcare, clothing, and nutrition, giving these children
          the chance to build a foundation for a better future.
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
