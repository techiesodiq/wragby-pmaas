import Image from "next/image";
import Link from "next/link";
import AboutImage from "../assets/images/about.svg";

function AboutSection() {
  return (
    <section className="py-16 bg-[#ECF5FF]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About Wragby PMaaS
            </h2>

            <p className="text-lg text-gray-600">
              Wragby PMaaS (Project Management as a Service) gives you on-demand
              access to expert project managers who deliver complex IT and
              digital transformation projects—without the overhead of a full
              in-house PMO. Whether you&rsquo;re managing a cloud migration, ERP
              deployment (SAP, Microsoft Dynamics 365), SharePoint rollout,
              Windows modernization (Windows 11, Skype-to-Teams), DevSecOps
              pipeline, or cybersecurity framework, our PMs ensure every project
              runs smoothly, stays aligned to business goals, and delivers
              measurable impact. We manage the planning, execution, governance,
              and stakeholder engagement, so your teams can focus on what
              matters most—innovation, scale, and transformation.
            </p>

            <p className="text-lg font-semibold text-gray-900">
              No Delays, No Excuses, Just Delivery.
            </p>

            <div className="pt-4">
              <Link
                href="https://forms.office.com/r/52jNrZpGbf?origin=lprLink"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#002060] hover:bg-blue-700 transition-colors duration-200"
              >
                Book a Free Consultation →
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={AboutImage}
              alt="Team working together on project"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
