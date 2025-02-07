import { Suspense, lazy } from "react";

// Lazy load components for better performance
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const LaunchPage = lazy(() => import("./components/LaunchPage"));
const Roadmap = lazy(() => import("./components/Roadmap"));

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-scale" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.1)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-rotate" />
      </div>

      {/* Content with Suspense for Lazy Loading */}
      <div className="relative z-10">
        <h1 className="sr-only">Hello World</h1>

        <Suspense fallback={<div>Loading Hero...</div>}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<div>Loading About...</div>}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<div>Loading Roadmap...</div>}>
          <section>
            <Roadmap />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading Launch...</div>}>
          <LaunchPage />
        </Suspense>
      </div>
    </div>
  );
}
