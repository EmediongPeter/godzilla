import { TrendingUp, Users, BarChart2, Wallet, Lock, LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: any;
  icon: LucideIcon;
  change?: number;
};

const StatCard = ({ title, value, icon: Icon, change }: Props) => (
  <div className="relative overflow-hidden rounded-2xl bg-zinc-900/80 p-6 backdrop-blur-xl border border-zinc-800/50 group hover:border-[#43e97b]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#43e97b]/10">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#43e97b]/5 to-[#38f9d7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="flex items-center justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 bg-gradient-to-r from-[#43e97b] to-[#38f9d7] rounded-lg p-1 text-black" />
          <p className="text-zinc-400 text-sm font-medium">{title}</p>
        </div>
        <div>
          <p className="text-3xl font-bold bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent">
            {value}
          </p>
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp
                className={`h-4 w-4 ${change > 0 ? "text-[#43e97b]" : "text-red-500"}`}
              />
              <p className={`text-sm font-bold ${change > 0 ? "text-[#43e97b]" : "text-red-500"}`}>
                {change > 0 ? "+" : ""}
                {change}%
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-gradient-to-r from-[#43e97b]/10 to-[#38f9d7]/10 blur-2xl rounded-full group-hover:opacity-75 transition-opacity" />
  </div>
);

type Stats = {
  price: number;
  holders: number;
  marketCap: number;
  volume: number;
};

async function fetchTokenData(): Promise<Stats> {
  try {
    // Example API Fetching
    // const response = await fetch("https://api.example.com/token");
    // const data = await response.json();
    
    return {
      price: 173.4,
      holders: 4533,
      marketCap: 100000,
      volume: 3000,
    };
  } catch (error) {
    console.error("Error fetching token data:", error);
    return { price: 0, holders: 0, marketCap: 0, volume: 0 };
  }
}

export default async function TokenStats() {
  const tokenData = await fetchTokenData(); // Fetch on the server

  return (
    <div className="px-4 py-12 md:px-6 lg:px-8 bg-black/40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Live Price" value={`$${tokenData.price.toFixed(4)}`} icon={TrendingUp} change={2.5} />
          <StatCard title="Number of Holders" value={tokenData.holders.toLocaleString()} icon={Users} />
          <StatCard title="Market Cap" value={`$${(tokenData.marketCap / 1_000_000).toFixed(2)}M`} icon={BarChart2} />
          <StatCard title="24h Volume" value={`$${(tokenData.volume / 1_000).toFixed(2)}K`} icon={Wallet} change={-1.2} />
          <StatCard title="Total Staked" value="Coming Soon" icon={Lock} />
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import { TrendingUp, Users, BarChart2, Wallet, Lock, LucideIcon } from "lucide-react";

// type Props = {
//   title: string;
//   value: any;
//   icon: LucideIcon;
//   change: number;
// };
// const StatCard = ({ title, value, icon: Icon, change }: Props) => (
//   <div className="relative overflow-hidden rounded-2xl bg-zinc-900/80 p-6 backdrop-blur-xl border border-zinc-800/50 group hover:border-[#43e97b]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#43e97b]/10">
//     <div className="absolute inset-0 bg-gradient-to-tr from-[#43e97b]/5 to-[#38f9d7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//     <div className="flex items-center justify-between">
//       <div className="space-y-3">
//         <div className="flex items-center gap-2">
//           <Icon className="h-5 w-5 bg-gradient-to-r from-[#43e97b] to-[#38f9d7] rounded-lg p-1 text-black" />
//           <p className="text-zinc-400 text-sm font-medium">{title}</p>
//         </div>
//         <div>
//           <p className="text-3xl font-bold bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent">
//             {value}
//           </p>
//           {change && (
//             <div className="flex items-center gap-1 mt-2">
//               <TrendingUp
//                 className={`h-4 w-4 ${
//                   change > 0 ? "text-[#43e97b]" : "text-red-500"
//                 }`}
//               />
//               <p
//                 className={`text-sm font-bold ${
//                   change > 0 ? "text-[#43e97b]" : "text-red-500"
//                 }`}
//               >
//                 {change > 0 ? "+" : ""}
//                 {change}%
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>

//     <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-gradient-to-r from-[#43e97b]/10 to-[#38f9d7]/10 blur-2xl rounded-full group-hover:opacity-75 transition-opacity" />
//   </div>
// );

// type Stats = {
//   price: number;
//   holders: number;
//   marketCap: number;
//   volume: number;
// };
// export default function TokenStats() {
//   const [tokenData, setTokenData] = useState<Stats>({
//     price: 0.0,
//     holders: 0.0,
//     marketCap: 0.0,
//     volume: 0.0,
//   });

//   useEffect(() => {
//     const updateData = async () => {
//       const data = await fetchTokenData();
//       if (data) setTokenData(data);
//     };

//     updateData();
//     const interval = setInterval(updateData, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="px-4 py-12 md:px-6 lg:px-8 bg-black/40">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           <StatCard
//             title="Live Price"
//             value={tokenData ? `$${tokenData?.price?.toFixed(4)}` : "$0.000"}
//             icon={TrendingUp}
//             change={2.5}
//           />
//           {/* <StatCard
//             title="Number of Holders"
//             value={tokenData ? tokenData?.holders?.toLocaleString() : '0'}
//             icon={Users}
//           />
//           <StatCard
//             title="Market Cap"
//             value={tokenData ? `$${(tokenData?.marketCap/1000000).toFixed(2)}M` : '$0M'}
//             icon={BarChart2}
//           />
//           <StatCard
//             title="24h Volume"
//             value={tokenData ? `$${(tokenData?.volume/1000).toFixed(2)}K` : '$0K'}
//             icon={Wallet}
//             change={-1.2}
//           />
//           <StatCard
//             title="Total Staked"
//             value="Coming Soon"
//             icon={Lock}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// const fetchTokenData = async () => {
//   try {
//     // const [priceData, holdersData] = await Promise.all([
//     //   fetch('DEXSCREENER_API_ENDPOINT').then(res => res.json()),
//     //   fetch('SOLSCAN_API_ENDPOINT').then(res => res.json())
//     // ]);
//     return {
//       price: 173.4,
//       holders: 4533,
//       marketCap: 100000,
//       volume: 3000,
//     };

//     // return {
//     //   price: priceData.price,
//     //   holders: holdersData.holders,
//     //   marketCap: priceData.price * CIRCULATING_SUPPLY,
//     //   volume: priceData.volume24h
//     // };
//   } catch (error) {
//     console.error("Error fetching token data:", error);
//     return null;
//   }
// };
