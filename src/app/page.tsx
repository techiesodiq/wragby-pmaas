import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
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
        <Hero />
        <HowItWorks />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
