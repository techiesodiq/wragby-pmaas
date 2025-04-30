function HowItWorks() {
  const steps = [
    "Browse services and discover the right tier for your needs",
    "Offer expert advice and scope the project",
    "Kick off the project with aligned goals and resources",
    "Seamless execution, reporting, and success tracking",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">How it Works</h2>
        <div className="border-b-2 border-blue-500 w-16 mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
