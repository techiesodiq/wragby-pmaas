"use client";
import Image from "next/image";
import BrainIllustration from "../assets/icons/brain-illustration.svg";
import CautionIllustration from "../assets/icons/caution.svg";
import FlexibleIllustration from "../assets/icons/flexible.svg";
import DollarsPadlockIllustration from "../assets/icons/padlock.svg";
import ScalableIllustration from "../assets/icons/scalable.svg";
import WaterfallIllustration from "../assets/icons/waterfall.svg";

const benefits = [
  {
    id: "1",
    title: "Planning & Strategy",
    img: BrainIllustration,
  },
  {
    id: "2",
    title: "Agile & Waterfall",
    img: WaterfallIllustration,
  },
  {
    id: "3",
    title: "Risk & Change Management",
    img: CautionIllustration,
  },
  {
    id: "4",
    title: "Cost Effective",
    img: DollarsPadlockIllustration,
  },
  {
    id: "5",
    title: "Flexible",
    img: FlexibleIllustration,
  },
  {
    id: "6",
    title: "Scalable",
    img: ScalableIllustration,
  },
];

function BenefitsSection() {
  return (
    <section className="py-16 bg-[#E5E9F2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A0A3D]">Key Benefits</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#E5E9F2] border border-[#0A0A3D] rounded-[20px] px-6 py-10 flex items-start gap-4"
            >
              <Image
                src={benefit.img}
                alt={benefit.title}
                width={40}
                height={40}
                className="flex-shrink-0"
              />
              <h3 className="text-lg font-semibold text-[#0A0A3D]">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
