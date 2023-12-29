import HeroSection from "./components/hero";
import OurIntroduction from "./components/introduction";
import Navbar from "./components/navbar";
import PopularFruits from "./components/popular-fruits";
import WatchVideo from "./components/watch-video";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurIntroduction />
      <PopularFruits />
      <WatchVideo />
    </>
  );
}
