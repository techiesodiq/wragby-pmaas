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
              Wragby PMaaS (Project Management as a Service) offers
              organizations a smarter way to execute projects—without the
              overhead. We provide expert-led project management solutions
              tailored to your unique goals, timelines, and challenges. Whether
              it&rsquo;s driving digital transformation, managing
              cross-functional teams, or delivering strategic initiatives,
              Wragby PMaaS ensures seamless execution from start to finish.
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
