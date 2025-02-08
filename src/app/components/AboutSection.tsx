import React from "react";
// import { motion } from 'framer-motion';
import * as motion from "motion/react-client";
import { Rocket, Shield, Users, Coins } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#43e97b]" />,
      title: "Community-Driven Power",
      description:
        "Join the most vibrant and degen-friendly community in the Solana ecosystem, where memes meet momentum and cuteness conquers all.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#43e97b]" />,
      title: "Diamond Hand Rewards",
      description:
        "Stake your $GODZ and earn while you hold. Our innovative staking system rewards the true believers with juicy yields.",
    },
    // {
    //   icon: <Coins className="w-8 h-8 text-[#43e97b]" />,
    //   title: "Revolutionary Tokenomics",
    //   description:
    //     "Precisely engineered with 70% for the community, built for sustainable growth and long-term value creation.",
    // },
    {
      icon: <Rocket className="w-8 h-8 text-[#43e97b]" />,
      title: "Unlimited Potential",
      description:
        "From pump.fun to major exchanges, we're on a mission to reach $1Bn and beyond with unstoppable kawaii energy.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#43e97b] bg-clip-text text-transparent">
            Unleash the Cutest Force in Solana
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Godzicoin ($GODZ) combines kawaii aesthetics with serious DeFi
            potential, creating the most adorable and powerful memecoin in the
            ecosystem.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-5xl px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-lg rounded-2xl p-6 border border-[#43e97b]/20 hover:border-[#43e97b]/40 transition-all duration-300 w-full max-w-md mx-auto"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-zinc-800/50 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Link href="https://t.me/GodzOnSol" target="_blank">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <button className="bg-gradient-to-r from-[#43e97b] to-[#38f9d7] text-black font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300">
              Join the Kawaii Revolution
            </button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
