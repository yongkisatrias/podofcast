import About from "@/components/About";
import Content from "@/components/Content";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
    </>
  );
}
