import About from "@/components/About";
import Blog from "@/components/Blog";
import Content from "@/components/Content";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Features />
      <Content />
      <Pricing />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}
