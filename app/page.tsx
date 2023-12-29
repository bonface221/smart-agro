import BottomCTA from "./components/bottom-cta";
import Brands from "./components/brands";
import CompletedWork from "./components/completed-work";
import ContactUs from "./components/contact";
import HeroSection from "./components/hero";
import OurIntroduction from "./components/introduction";
import ModernAgriculture from "./components/modern-agriculture";
import Navbar from "./components/navbar";
import NewsAndArticles from "./components/news";
import PopularFruits from "./components/popular-fruits";
import Testimonials from "./components/testimonials";
import WatchVideo from "./components/watch-video";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurIntroduction />
      <PopularFruits />
      <WatchVideo />
      <CompletedWork />
      <Testimonials />
      <ModernAgriculture />
      <NewsAndArticles />
      <ContactUs />
      <Brands />
      <BottomCTA />
    </>
  );
}
