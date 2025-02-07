import React from "react";
import * as motion from "motion/react-client";

interface RoadmapItemProps {
  phase: string;
  title: string;
  description: string;
  index: number;
}

const RoadmapItem = ({
  phase,
  title,
  description,
  index,
}: RoadmapItemProps) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <div className="absolute -left-[calc(1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#43e97b] to-[#38f9d7] opacity-30 group-hover:opacity-100 transition-all duration-300" />

      <div
        className={`
        ml-6 p-6 mb-8 rounded-2xl border 
        ${
          index % 2 === 0
            ? "bg-zinc-900/50 border-[#43e97b]/20 hover:border-[#43e97b]/40"
            : "bg-zinc-800/50 border-[#38f9d7]/20 hover:border-[#38f9d7]/40"
        }
        backdrop-blur-lg transition-all duration-300
      `}
      >
        <div
          className="absolute -left-[22px] top-2 w-5 h-5 rounded-full 
          bg-gradient-to-r from-[#43e97b] to-[#38f9d7] 
          group-hover:scale-110 transition-transform duration-300"
        />

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent">
              {phase}
            </span>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Roadmap() {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Launch",
      description:
        "Spread kawaii alpha through social media blitz and meme drops. OG Website release. Launch on Pump.Fun to establish our roots in the degen scene. Sending it to Raydium after proving our OG status on Pump.Fun.",
    },
    {
      phase: "Phase 2",
      title: "Community Growth",
      description:
        "Meme wars, competitions, and exclusive holder events. Launch staking to reward the most committed degens.",
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Domination",
      description:
        "Integrate $GODZ into DeFi projects to expand utility. Develop strategic collaborations with major Web3 platforms to increase adoption and exposure.",
    },
    {
      phase: "Phase 4",
      title: "Community-Driven Decision Support",
      description:
        "Introduce a voting system to help guide the team in making key decisions for the project's future. Reward active participants who contribute valuable insights and engagement in $GODZ development.",
    },
    {
      phase: "Phase 5",
      title: "Merch and Brand Awareness",
      description:
        "Drop premium $GODZ merch for Web3 trendsetters. Collaborate with meme lords and NFT artists to push $GODZ virality.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden py-16 px-4 md:px-8">
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-scale" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.1)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-rotate" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] mix-blend-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Roadmap
        </motion.h2>

        <div className="relative">
          {roadmapData.map((item, index) => (
            <RoadmapItem key={index} {...item} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12 text-xl text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Cuteness and alpha energy at full force.
          <br />
          Join $GODZ and let's create history together 🚀
        </motion.div>
      </div>
    </section>
  );
}
