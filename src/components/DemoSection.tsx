import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../assets/icons/arrow_right.svg";

function DemoSection() {
  return (
    <section className="py-16 bg-[#E8EDEF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 md:p-12">
          <h2 className="text-[62px] leading-[114.99999999999999%] text-[#000044] font-bold mb-[24px]">
            Still unsure? Let&rsquo;s show
            <br />
            you how it works.
          </h2>

          <Link
            href="https://wragbysolutions1-my.sharepoint.com/:v:/g/personal/mokoh_wragbysolutions_com/ESKCo5dJG61Lp-ir3_xIAuEBwdLeFKxVuDNdx21oHyMoIQ?e=CG1jot"
            className="inline-flex items-center py-[21px] px-[30px] border border-transparent text-[20px] font-medium rounded-md text-white bg-[#002060] hover:bg-blue-700 transition-colors duration-200 shadow-sm flex flex-row items-center gap-4"
          >
            Start with a Demo
            <Image src={ArrowRight} alt="Arrow right" width={20} height={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
