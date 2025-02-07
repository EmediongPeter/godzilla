// import React from "react";
// import * as motion from "motion/react-client";
// import Image from "next/image";
// import TokenStats from "./LiveData";
// import Link from "next/link";
// import TransactionIndicator from "./TransactionIndicator";

// // Reusable motion button component
// const MotionButton = ({
//   children,
//   href,
//   isLink = false,
// }: {
//   children: React.ReactNode;
//   href?: string;
//   isLink?: boolean;
// }) => {
//   const button = (
//     <motion.button
//       className="mt-4 rounded-full px-6 py-3 font-medium text-sm transition-all shadow-lg shadow-[#43e97b]/20"
//       initial={{ y: 20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, delay: 0.4 }}
//       style={{
//         background: isLink
//           ? "bg-black/20"
//           : "bg-gradient-to-r from-[#43e97b] to-[#38f9d7]",
//         color: isLink ? "text-white" : "text-zinc-950",
//       }}
//     >
//       {children}
//     </motion.button>
//   );

//   return isLink && href ? (
//     <Link href={href} target="_blank" rel="noopener noreferrer">
//       {button}
//     </Link>
//   ) : (
//     button
//   );
// };

// // Reusable animated image component
// const AnimatedImage = ({ className = "" }: { className?: string }) => (
//   <motion.div
//     initial={{ x: -100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ duration: 0.6 }}
//     className={`relative group ${className}`}
//   >
//     <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-[#43e97b]/20 to-[#38f9d7]/20 group-hover:from-[#43e97b]/30 group-hover:to-[#38f9d7]/30 transition-all duration-300" />
//     <Image
//       src="/godz_transparent.png"
//       alt="$GODZ"
//       width={450}
//       height={450}
//       className="relative z-10 drop-shadow-2xl"
//     />
//   </motion.div>
// );

// export default function HeroSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden pt-0 z-10">
//       {/* Background Effects */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-scale" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.1)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-rotate" />
//       </div>

//       {/* Content Layout */}
//       <div className="relative z-10 flex flex-col lg:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-20 items-center">
//         {/* LEFT: Title, Subtitle (Both Mobile & Desktop) */}
//         <div className="flex flex-col space-y-6 text-center lg:text-left">
//           <motion.h1
//             className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent drop-shadow-lg"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Baby Godzilla
//           </motion.h1>

//           <motion.h2
//             className="text-2xl font-medium text-zinc-100"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             The cutest Baby Godzilla memecoin on Solana
//           </motion.h2>

//           {/* Buttons (Both Mobile & Desktop) */}
//           <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
//             <MotionButton>Launch Coming Soon</MotionButton>
//             <MotionButton
//               isLink
//               href="https://godz-godzicoin.gitbook.io/godzicoin-usdgodz-litepaper"
//             >
//               Whitepaper
//             </MotionButton>
//           </div>
//         </div>

//         {/* RIGHT: Image + Transaction Indicator (Desktop Layout) */}
//         <div className="hidden lg:flex items-center gap-8">
//           <AnimatedImage />
//           <TransactionIndicator />
//         </div>

//         {/* Mobile Layout: Image + Transaction Indicator */}
//         <div className="lg:hidden flex flex-col items-center w-full mt-8">
//           <AnimatedImage />
//           <div className="mt-4">
//             <TransactionIndicator />
//           </div>
//         </div>
//         {/* <div className="text-center lg:text-left ">
//         <TokenStats />
//       </div> */}
//       </div>

//       {/* Token Stats (Both Mobile & Desktop) */}
//       <div className="text-center lg:text-left justify-items-start ">
//         <TokenStats />
//       </div>
//     </section>
//   );
// }

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

      <div className="relative z-10 flex flex-col lg:flex-row justify-between px-8 py-16 sm:px-16 md:px-20 items-center">
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
                className="mt-8 rounded-full bg-gradient-to-r from-[#43e97b] to-[#38f9d7] px-6 py-3 font-medium text-zinc-950 hover:brightness-110 transition-all shadow-lg shadow-[#43e97b]/20 text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Launch Coming Soon
              </motion.button>
              <Link
                href="https://godz-godzicoin.gitbook.io/godzicoin-usdgodz-litepaper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="mt-8 rounded-full hover:bg-gradient-to-r from-[#43e97b] to-[#38f9d7] px-6 py-3  hover:brightness-110 transition-all shadow-lg shadow-[#43e97b]/20 uppercase text-white bg-black/20 font-bold "
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Whitepaper
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex-col">
            <div className="md:hidden flex-row gap-3">
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
                  width={450} // Define width
                  height={450} // Define height to match original behavior
                  className="relative z-10 drop-shadow-2xl"
                />
              </motion.div>
            </div>
            <TokenStats />
          </div>
        </div>

        <div className="hidden sm:block">
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
              width={450} // Define width
              height={450} // Define height to match original behavior
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
