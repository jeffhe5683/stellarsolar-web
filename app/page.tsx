import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ProjectShowcase from "@/components/ProjectShowcase";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <ProjectShowcase />
      <Stats />
      <Testimonials />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
