function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$2,500/month",
      features: [
        "1 Junior PM (remote)",
        "Base planning, tracking & reporting",
        "Monthly KPIs & updates",
        "Templates - Light governance",
        "MS Project Desktop or Excel",
        "Email & virtual briefings",
        "5 hours consultations/month",
        "1 Microsoft Project training/session",
        "Optional PMO Lite Setup: $10,000",
      ],
      addons: ["PMP Training: $250", "Custom Reports: from $300"],
      cta: "Subscribe",
    },
    {
      name: "Standard",
      price: "$4,000/month",
      features: [
        "1 Mid-Level PM (remote/onsite)",
        "Full flexible management",
        "Portfolio setup & prioritization",
        "Bi-weekly KPIs & reporting",
        "PMO/Agile frameworks",
        "MS Project Online or Asana setup",
        "Stakeholder sessions",
        "2 PMP/Agile trainings/year",
        "10 hours consultation/month",
        "Optional PMO Setup: $15,000",
      ],
      addons: [
        "Extra PM: $4,000–$6,400/month",
        "Tool Config: from $1,500",
        "PMP/Agile Training: $500–$750",
      ],
      cta: "Subscribe",
      popular: true,
    },
    {
      name: "Premium",
      price: "$8,000/month",
      features: [
        "1 Senior PM + PMO Analyst",
        "Strategic portfolio program mgmt.",
        "Real-time dashboards",
        "Enterprise risk & compliance",
        "Custom PM frameworks (PMBOK, Agile, Hybrid)",
        "MS Project, Jira, Azure DevOps integration",
        "Onsite visits: 4/year",
        "Stakeholder reviews & escalation",
        "Governance board facilitation",
        "20+ hours consultation/month",
        "Annual PMO Health Check",
        "Optional Premium PMO Setup: $25,000",
      ],
      addons: [
        "Extra Senior PM: $2,000/month",
        "PMO Audit: $5,000",
        "PM Tool Integration: from $3,000",
        "Executive Coaching: $1,000/session",
      ],
      cta: "Subscribe",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Packages and Pricing
        </h2>
        <div className="border-b-2 border-blue-500 w-16 mb-8"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                plan.popular
                  ? "border-2 border-blue-500"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-1 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-6">
                  {plan.price}
                </p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.addons && plan.addons.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-2">Add-ons:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {plan.addons.map((addon, i) => (
                        <li key={i} className="ml-4">
                          {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  className={`w-full py-3 rounded-md font-medium ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Still unsure? Let&apos;s show you how it works.
          </h3>
          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
            Start with a Demo →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
