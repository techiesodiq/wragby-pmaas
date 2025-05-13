"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowRight from "../assets/icons/arrow_right.svg";
import HeroImage from "../assets/images/hero.svg";

const HeroSection = () => {
  const router = useRouter();
  const handleClick = () =>
    router.push("https://forms.office.com/r/52jNrZpGbf?origin=lprLink");

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={HeroImage}
        alt="Office workspace background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Logo/Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Wragby PMaaS
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-2xl">
          Expertly Managing Projects Seamlessly Delivered.
        </p>

        {/* CTA Button */}
        <button
          className="bg-[#002060] hover:bg-[#001a4d] text-white font-bold py-[21px] px-[30px] rounded-[10px] text-lg transition duration-300 transform hover:scale-105 flex flex-row items-center gap-4"
          onClick={handleClick}
        >
          Book a Free Consultation
          <Image src={ArrowRight} alt="Arrow right" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
