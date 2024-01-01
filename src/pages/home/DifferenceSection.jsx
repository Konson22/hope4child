import { Heading1, Heading3 } from "../../util/HeadingTitles";

export default function DifferenceSection() {
  return (
    <div className="md:flex items-center md:px-[15%] px-4 my-16">
      <div className="md:w-[30%]"></div>
      <div className="flex-1">
        <Heading1 text="How Your Sponsorship Makes a Difference:" />
        <p>
          When you sponsor education for a street child, you become a beacon of
          hope in their lives. Your generosity directly contributes to their
          access to quality education and holistic development. Here's how your
          sponsorship makes a tangible difference:
        </p>
        {data.map((info) => (
          <div className="mb-6">
            <Heading3 text={info.title} />
            {/* <p className="line-clamp-4">{info.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "School Fees and Supplies",
    text: `Your support covers school fees, uniforms, books, and necessary supplies, ensuring they have everything needed to attend school.
        `,
  },
  {
    title: "Nutrition and Healthcare",
    text: `We provide regular meals and access to basic healthcare, ensuring the children's physical and mental well-being, essential for effective learning.`,
  },
  {
    title: "Safe Learning Environment",
    text: `We create safe and supportive learning environments, where children feel valued and empowered to express themselves.`,
  },
  {
    title: "Mentoring and Counseling",
    text: `Our mentors and counselors provide guidance and emotional support, helping these children cope with past traumas and build resilience for the future.`,
  },
  {
    title: "Extracurricular Activities",
    text: `We offer extracurricular activities such as arts, sports, and life skills training, promoting well-rounded development.`,
  },
];
