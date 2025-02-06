import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import TokenStats from "./LiveData";
import Link from "next/link";
import TransactionIndicator from "./TransactionIndicator";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden pt-0 z-10">
      {/* Enhanced gradient overlay */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)]" /> */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-scale" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.1)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-rotate" />
      </div>

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

      <div className="relative z-10 flex flex-col lg:flex-row justify-between px-8 py-16 sm:px-16 md:px-24 items-center">
        <div className="flex flex-col space-y-8 max-w-2xl justify-center text-center">
          <div className="text-white mx-auto justify-center pt-5 space-y-4">
            <motion.h1
              className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Baby Godzilla
            </motion.h1>
            <motion.h1
              className="text-2xl font-medium text-zinc-100"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The cutest Baby Godzilla memecoin on Solana
            </motion.h1>
            <div className="flex gap-3">
              <motion.button
                className="mt-8 rounded-full bg-gradient-to-r from-[#43e97b] to-[#38f9d7] px-6 py-3 font-medium text-zinc-950 hover:brightness-110 transition-all shadow-lg shadow-[#43e97b]/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Launch Coming Soon
              </motion.button>
              <Link
                href="/https://godz-godzicoin.gitbook.io/godzicoin-usdgodz-litepaper"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="mt-8 rounded-full hover:bg-gradient-to-r from-[#43e97b] to-[#38f9d7] px-6 py-3  hover:brightness-110 transition-all shadow-lg shadow-[#43e97b]/20 uppercase text-white bg-black/20 font-bold "
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Whitepaper
                  </motion.button>
                </a>
              </Link>
            </div>
          </div>

          <div className="flex-col w-3/4">
            <TokenStats />
          </div>
        </div>

        <div className="">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group pt-20"
          >
            <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-[#43e97b]/20 to-[#38f9d7]/20 group-hover:from-[#43e97b]/30 group-hover:to-[#38f9d7]/30 transition-all duration-300" />
            <Image
              src="/godz_transparent.png"
              alt="$GODZ"
              width={400} // Define width
              height={400} // Define height to match original behavior
              className="relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="z-[999]">
          <TransactionIndicator />
        </div>
      </div>
    </section>
  );
}
