import Link from "next/link";

function PricingSection() {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$2,500/month",
      features: [
        "1 Junior PM (remote)",
        "Basic planning, tracking & reporting",
        "Monthly KPIs & updates",
        "Templates + light governance",
        "MS Project Desktop or Excel",
        "Email & virtual briefings",
        "5 hours consulting/month",
        "1 Microsoft Project training/quarter",
        "Optional PMO Lite Setup: $10,000",
      ],
      addOns: ["PMP Training: $250", "Custom Reports: from $300"],
      buttonText: "Subscribe",
    },
    {
      title: "Standard",
      price: "$4,000/month",
      features: [
        "1 Mid-Level PM (remote/hybrid)",
        "Full lifecycle management",
        "Portfolio setup & prioritization",
        "Bi-weekly KPIs & reporting",
        "PMBOK/Agile frameworks",
        "MS Project Online or Jira setup",
        "Stakeholder sessions",
        "2 PMP/Agile trainings/year",
        "10 hours consultation/month",
        "Optional PMO Setup: $15,000",
      ],
      addOns: [
        "Extra PM: $4,000-$8,400/month",
        "Tool Config: from $1,500",
        "PMP/Agile Training: $250-$500",
      ],
      buttonText: "Subscribe",
    },
    {
      title: "Premium",
      price: "$8,000/month",
      features: [
        "1 Senior PM + PMO Analyst",
        "Strategic portfolio/program mgmt.",
        "Real-time dashboards",
        "Enterprise risk & compliance",
        "Custom PM frameworks (PMBOK, Agile, Hybrid)",
        "MS Project, Jira, Azure DevOps integration",
        "Onsite visits: 4/quarter",
        "Stakeholder comms & escalation",
        "Governance board facilitation",
        "20+ hours consultation/month",
        "Annual PMO Health Check",
        "Optional Premium PMO Setup: $25,000",
      ],
      addOns: [
        "Extra Senior PM: $2,000/month",
        "PMO Audit: $6,000",
        "PM Tool Integration: from $3,000",
        "Executive Coaching: $1,000/session",
      ],
      buttonText: "Subscribe",
    },
  ];

  return (
    <section className="py-16 bg-[#D4DCEA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[62px] font-semibold text-[#000044] leading-[1.15] sm:text-4xl">
            Packages and Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col h-full border border-gray-200 rounded-lg shadow-sm overflow-hidden w-full max-w-md mx-auto"
            >
              <div className="px-6 py-8 bg-white flex-grow">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                  {plan.title}
                </h3>

                {/* Features List */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Add-ons Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Add-ons:</strong>
                  </h4>
                  <ul className="space-y-2">
                    {plan.addOns.map((addOn, addOnIndex) => (
                      <li key={addOnIndex} className="text-gray-600 flex">
                        <span className="mr-1">•</span>
                        <span>{addOn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price and Button */}
              <div className="px-6 pb-8 bg-gray-50">
                <div className="text-center mt-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <div className="mt-6">
                  <Link
                    href="https://forms.office.com/r/xRP7aBjsjW?origin=lprLink"
                    className="block w-full text-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
