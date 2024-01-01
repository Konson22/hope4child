import { Heading1 } from "../../util/HeadingTitles";

export default function UrgentNeedSection() {
  return (
    <div className="px-[10%] my-14">
      <div className="flex-1">
        <img src={process.env.PUBLIC_URL} alt="" />
      </div>
      <Heading1 text="The Urgent Need" />
      <p>
        Millions of children around the world find themselves living on the
        streets or in orphanages due to various reasons such as poverty,
        conflict, and abandonment. These children often lack access to basic
        necessities like food, education, and healthcare. By sponsoring a child,
        you can be the catalyst for change and contribute to breaking the cycle
        of poverty.
      </p>
    </div>
  );
}
