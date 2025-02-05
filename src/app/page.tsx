import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import TokenStats from "./components/LiveData";
import TransactionIndicator from "./components/TransactionIndicator";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-scale" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.1)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-rotate" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="sr-only">Hello World</h1>{" "}
        {/* Hidden for accessibility */}
        <HeroSection />
        <section>
          <TokenStats />
        </section>
        <AboutSection /> Add the new AboutSection
        <section className="relative">
          <TransactionIndicator />
        </section>
      </div>
    </div>
  );
}