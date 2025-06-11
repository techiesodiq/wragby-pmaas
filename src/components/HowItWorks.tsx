"use client";
import Image from "next/image";
import BubbleIcon from "../assets/icons/bubbles.svg";
import RocketIcon from "../assets/icons/rocket.svg";
import ScopeIcon from "../assets/icons/scope.svg";
import TickSquareIcon from "../assets/icons/tick-square.svg";
import WritePencilIcon from "../assets/icons/write-pen-pencil.svg";

const HowItWorksSection = () => {
  const steps = [
    {
      id: "1",
      text: "Explore – Discover the PMaaS tier that suits your project",
      img: ScopeIcon,
    },
    {
      id: "2",
      text: "Request – Submit your project brief or consultation request",
      img: WritePencilIcon,
    },
    {
      id: "3",
      text: "Consult – Meet with a Wragby advisor to align scope and goalst",
      img: BubbleIcon,
    },
    {
      id: "4",
      text: "Onboard – Assign your PM and tools, kickoff with clarity",
      img: RocketIcon,
    },
    {
      id: "5",
      text: "Deliver – We drive execution, reporting, and stakeholder updates",
      img: TickSquareIcon,
    },
  ];

  return (
    <section className="py-[90px] px-4 sm:px-6 lg:px-8 bg-[#000021]">
      <div className="max-w-3xl mx-auto flex flex-col">
        <h2 className="text-[62px] font-bold text-white mb-8 text-center">
          How It Works
        </h2>

        <div className="flex flex-col gap-[20px] items-center">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-row items-center justify-start gap-[24px] w-full max-w-[672px] bg-[#1387E61A] p-[24px] rounded-[20px] text-[#D4DCEA] text-[24px]"
            >
              <Image alt={step.text} src={step.img} />
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
