import Image from "next/image";
import HeroSection from "./components/HeroSection";
import TokenStats from "./components/LiveData";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <HeroSection />

      <section>
        <TokenStats />
      </section>
    </div>
  );
}
