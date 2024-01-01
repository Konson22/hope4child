import { FaArrowRight } from "react-icons/fa";
import { Heading1, Heading3 } from "../../util/HeadingTitles";
import { whySponsorData } from "../../assets/data";
import { RoundedLinkButton } from "../../util/Buttons";
import { Link } from "react-router-dom";

export default function WhySponsorshipMatterSection() {
  return (
    <div className="md:px-[10%] px-4 my-20">
      <div className="text-center md:px-[15%]">
        <Heading1 text="Why Sponsorship Matters" />
        <p>
          Sponsoring a street child or orphan goes beyond financial support. It
          means providing a stable and nurturing environment where they can
          grow, learn, and thrive. Your sponsorship can cover essentials like
          education, healthcare, clothing, and nutrition, giving these children
          the chance to build a foundation for a better future.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-6">
        {whySponsorData.map((info) => (
          <div className="border shadow-lg">
            <div className="h-[250px]">
              <img src={info.image} alt="" />
            </div>
            <div className="p-5">
              <Heading3 text={info.title} />
              <p className="line-clamp-4 mb-6">{info.text}</p>
              <Link to={info.path}>
                <RoundedLinkButton text="Read more" icon={<FaArrowRight />} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
