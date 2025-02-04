//   <div className="absolute inset-0">
//     {/* <Spline scene="https://prod.spline.design/3D-scene-file-url" /> */}
//   </div>import React from "react";
// import * as motion from "motion/react-client";
import { motion } from "framer-motion";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="relative h-screen bg-gradient-to-b from-black via-[#43e97b]/20 to-black overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.1)_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#43e97b] to-transparent animate-pulse"
          style={{ top: "30%" }}
        />
        <div
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#38f9d7] to-transparent animate-pulse"
          style={{ top: "60%" }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-between px-8 py-16 sm:px-16 md:px-24">
        <div className="text-white">
          <motion.ul
            initial={{ "--rotate": "0deg" }}
            animate={{ "--rotate": "360deg" }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <li style={{ transform: "rotate(var(--rotate))" }} />
            <li style={{ transform: "rotate(var(--rotate))" }} />
            <li style={{ transform: "rotate(var(--rotate))" }} />
          </motion.ul>
          {/* <motion.h1
            className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Powering the Oilconomy:
          </motion.h1>
          <motion.h1
            className="text-4xl font-bold md:text-6xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CRUDO Protocol
          </motion.h1>
          <motion.button
            className="mt-8 rounded-full bg-gradient-to-r from-[#43e97b] to-[#38f9d7] px-6 py-3 font-medium text-black hover:from-[#38f9d7] hover:to-[#43e97b] transition-all"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Launch Coming Soon
          </motion.button> */}
        </div>

        {/* <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-[#43e97b]/30 to-[#38f9d7]/30" />
          <img
            src="/godz.jpg"
            alt="$GODZ"
            className="h-48 relative z-10 animate-bounce"
          />
        </motion.div> */}
      </div>
    </section>
  );
}
