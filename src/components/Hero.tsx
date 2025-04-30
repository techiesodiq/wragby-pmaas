function Hero() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Wragby PMaaS
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
          Project Management as a Service
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Organizations a smart way to execute projects—without the overhead. We
          provide expert bid project management solutions tailored to your
          unique goals, timelines, and challenges, whether for driving digital
          transformation.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
