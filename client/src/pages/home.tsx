import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Menu from "@/components/menu";
import Services from "@/components/services";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SmokeTransition from "@/components/smoke-transition";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <SmokeTransition />
      <About />
      <Menu />
      <Services />
      <Reviews />
      <Contact />
      <SmokeTransition />
      <Footer />
    </div>
  );
}
