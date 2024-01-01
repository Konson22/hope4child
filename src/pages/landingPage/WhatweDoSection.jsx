import { FaArrowRight } from "react-icons/fa";
import { whatwedodata } from "../../assets/data";
import { ButtonRounded } from "../../util/Buttons";
import { Heading1 } from "../../util/HeadingTitles";

export default function WhatweDoSection() {
  return (
    <div className="px-[10%] my-16">
      <Heading1 text="WHAT WE DO" cName="text-center" />
      <div className="grid grid-cols-2 gap-8 mt-8">
        {whatwedodata.map((info) => (
          <div className="border shadow-md">
            <div className="">
              <img src={info.image} alt="" />
            </div>
            <div className="p-4">
              <h3 className="text-2xl">{info.title}</h3>
              <p className="mb-7">{info.text}</p>
              <ButtonRounded text="Read more" icon={<FaArrowRight />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
