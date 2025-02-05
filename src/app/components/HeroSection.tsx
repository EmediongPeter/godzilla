import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden pt-0 z-10">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)]" />

      {/* Glowing lines */}
      <div className="absolute inset-0">
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#43e97b] to-transparent opacity-30 blur-sm"
          style={{ top: "20%", transform: "translateY(-50%) rotate(-5deg)" }}
        />
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#38f9d7] to-transparent opacity-20 blur-sm"
          style={{ top: "70%", transform: "translateY(-50%) rotate(5deg)" }}
        />
      </div>

      {/* Light noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] mix-blend-overlay" />

      <div className="relative z-10 flex items-center justify-between px-8 py-16 sm:px-16 md:px-24">
        <div className="text-white">
          <motion.h1
            className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Powering the Oilconomy:
          </motion.h1>
          <motion.h1
            className="text-4xl font-bold md:text-6xl text-zinc-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CRUDO Protocol
          </motion.h1>
          <motion.button
            className="mt-8 rounded-full bg-gradient-to-r from-[#43e97b] to-[#38f9d7] px-6 py-3 font-medium text-zinc-950 hover:brightness-110 transition-all shadow-lg shadow-[#43e97b]/20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Launch Coming Soon
          </motion.button>
        </div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group pt-20"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-[#43e97b]/20 to-[#38f9d7]/20 group-hover:from-[#43e97b]/30 group-hover:to-[#38f9d7]/30 transition-all duration-300" />
          <img
            src="/godz_transparent.png"
            alt="$GODZ"
            className="h-[400px] relative z-10 animate-bounce drop-shadow-2xl"
          />

          {/* <Image 
          src="/godz_transparent.png"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
