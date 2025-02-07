import React, { memo } from "react";
import * as motion from "motion/react-client"

const LaunchPage = memo(() => {
  return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-4">
          {/* <div className="w-full min-h-screen bg-black relative overflow-hidden py-20"> */}
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)]" />
      <div className="max-w-4xl w-full bg-[#121212] border border-[#2CFF87]/20 rounded-2xl overflow-hidden shadow-2xl z-[999] relative">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#0A2E2C] to-[#0A2E2C]/80 p-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#2CFF87] mb-4"
          >
            Launching Soon on Pump.Fun
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Get ready for the cutest and most explosive memecoin launch on
            Solana. Don&apos;t miss out on your chance to join the $GODZ movement!
          </p>
        </div>

        {/* Tokenomics and Security Grid */}
        <div className="grid md:grid-cols-2 gap-6 p-8 bg-[#121212]">
          {/* Tokenomics Card */}
          <motion.div
            className="bg-[#1A1A1A] border border-[#2CFF87]/10 rounded-2xl p-6 transition-all hover:border-[#2CFF87]/30"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-[#2CFF87] mb-4">
              Tokenomics
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Total Supply: 1,000,000,000 $GODZ</li>
              <li>• Community🌍: 70%</li>
              <li>• Marketing & Development📢: 10%</li>
              <li>• Staking Pools📈: 12%</li>
              <li>• Team & Advisors🔒: 8%</li>
            </ul>
          </motion.div>

          {/* Security Card */}
          <motion.div
            className="bg-[#1A1A1A] border border-[#2CFF87]/10 rounded-2xl p-6 transition-all hover:border-[#2CFF87]/30"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-[#2CFF87] mb-4">Security</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• LP Locked for 1 Year</li>
              <li>• Contract Renounced</li>
              <li>• No Team Tokens</li>
              <li>• Fair Launch</li>
            </ul>
          </motion.div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-[#1A1A1A] p-6 text-center">
          <motion.a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#2CFF87] to-[#00D1FF] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Pump.Fun
          </motion.a>
        </div>
      </div>
    </div>
  );
});

LaunchPage.displayName = "LaunchPage"

export default LaunchPage;