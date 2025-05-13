import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorks";
import PricingSection from "@/components/Pricing";
import Head from "next/head";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Wragby PMaaS - Project Management as a Service</title>
        <meta
          name="description"
          content="Organizations a smart way to execute projects—without the overhead."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <HowItWorksSection />
        <PricingSection />
        <DemoSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
