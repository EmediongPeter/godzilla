"use client";
import React, { useState, useEffect, useCallback } from "react";

export type Transaction = {
  id: string;
  amount: number;
  type: "buy" | "sell";
  timestamp: number;
};

const TransactionList = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <div className="z-[9999]">
      <div className="bg-gradient-to-br from-[#43e97b] to-[#38f9d7] p-1 rounded-2xl shadow-xl">
        <div className="bg-zinc-900/90 backdrop-blur-lg rounded-xl p-4 space-y-3 min-w-[80px]">
          <h3 className="text-[#43e97b] font-semibold text-lg mb-2">
            Tokens
          </h3>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#43e97b]" />
                <span className="text-zinc-200">
                  +{transaction.amount.toFixed(2)} SOL
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const generateDummyTransaction = (): Transaction => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    amount: parseFloat((Math.random() * 10).toFixed(2)),
    type: "buy", // Only generate buy transactions
    timestamp: Date.now(),
  };
};

export default function TransactionIndicator() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleNewTransaction = useCallback((transaction: Transaction) => {
    setTransactions((prev) => {
      // Keep only the last 4 positive transactions
      const newTransactions = [...prev, transaction]
        .filter(t => t.type === "buy")
        .slice(-4);
      return newTransactions;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTransaction = generateDummyTransaction();
      handleNewTransaction(newTransaction);
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNewTransaction]);

  return (
    <div className="pointer-events-none z-[9999]">
      {transactions.length > 0 && <TransactionList transactions={transactions} />}
    </div>
  );
}

// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export type Transaction = {
//   id: string;
//   amount: number;
//   type: "buy" | "sell";
//   timestamp: number;
//   position: {
//     x: number;
//     y: number;
//   };
// };

// const TransactionPopup = ({ 
//   amount, 
//   type, 
//   position 
// }: { 
//   amount: number; 
//   type: "buy" | "sell";
//   position: { x: number; y: number };
// }) => {
//   // Generate random float path
//   const floatY = Math.random() * -50;
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: position.x, y: position.y + 50 }}
//       animate={{ 
//         opacity: 1, 
//         y: position.y + floatY,
//         x: position.x + (Math.random() * 40 - 20), // Slight horizontal drift
//       }}
//       exit={{ opacity: 0, y: position.y - 50 }}
//       transition={{ 
//         duration: 0.8,
//         ease: "easeOut",
//       }}
//       style={{
//         position: 'fixed',
//         left: 0,
//         top: 0,
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         zIndex: 9999 // Ensure it's above everything
//       }}
//       className="bg-zinc-900/90 backdrop-blur-lg rounded-full px-6 py-3 text-white border border-[#43e97b]/20"
//     >
//       <div className="flex items-center gap-2">
//         <div className={`h-2 w-2 rounded-full ${type === "buy" ? "bg-[#43e97b]" : "bg-red-500"}`} />
//         <span className="font-medium text-sm whitespace-nowrap">
//           {type === "buy" ? "+" : "-"}
//           {amount.toFixed(2)} tokens {type === "buy" ? "bought" : "sold"}
//         </span>
//       </div>
//     </motion.div>
//   );
// };

// const GodzillaAnimation = React.memo(() => (
//   <motion.div
//     initial={{ scale: 0, opacity: 0 }}
//     animate={{ scale: 1, opacity: 1 }}
//     exit={{ scale: 0, opacity: 0 }}
//     transition={{ duration: 0.5 }}
//     style={{ zIndex: 9999 }}
//     className="fixed inset-0 flex items-center justify-center pointer-events-none"
//   >
//     <motion.img
//       src="/godz_transparent.png"
//       alt="Godzilla Effect"
//       className="h-40 w-40 object-contain"
//       animate={{
//         scale: [1, 1.1, 1],
//         rotate: [-2, 2, -2],
//       }}
//       transition={{ repeat: 3, duration: 0.3 }}
//     />
//   </motion.div>
// ));


// // Add display name explicitly
// GodzillaAnimation.displayName = "GodzillaAnimation";

// // Generate a random position within viewport bounds
// const generateRandomPosition = () => {
//   // Get viewport dimensions
//   const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
//   const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  
//   // Create margins to keep popups away from edges
//   const margin = 100;
  
//   return {
//     x: Math.random() * (viewportWidth - margin * 2) + margin,
//     y: Math.random() * (viewportHeight - margin * 2) + margin,
//   };
// };

// const generateDummyTransaction = (): Transaction => {
//   const types: ("buy" | "sell")[] = ["buy", "sell"];
//   return {
//     id: Math.random().toString(36).substring(2, 9),
//     amount: parseFloat((Math.random() * 10).toFixed(2)),
//     type: types[Math.floor(Math.random() * types.length)],
//     timestamp: Date.now(),
//     position: generateRandomPosition(),
//   };
// };

// export default function TransactionIndicator() {
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [showGodzilla, setShowGodzilla] = useState(false);

//   const handleNewTransaction = useCallback((transaction: Transaction) => {
//     setTransactions((prev) => {
//       const newTransactions = [...prev, transaction].slice(-10); // Keep last 10 transactions
//       return newTransactions;
//     });

//     if (transaction.amount >= 1 && transaction.type === "buy") {
//       setShowGodzilla(true);
//       const timeout = setTimeout(() => setShowGodzilla(false), 3000);
//       return () => clearTimeout(timeout);
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newTransaction = generateDummyTransaction();
//       handleNewTransaction(newTransaction);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [handleNewTransaction]);

//   // Auto-remove transactions after 5 seconds
//   useEffect(() => {
//     const cleanupInterval = setInterval(() => {
//       setTransactions((prev) =>
//         prev.filter((t) => Date.now() - t.timestamp < 5000)
//       );
//     }, 1000);

//     return () => clearInterval(cleanupInterval);
//   }, []);

//   // Add resize listener to update positions when window size changes
//   useEffect(() => {
//     const handleResize = () => {
//       setTransactions(prev => prev.map(transaction => ({
//         ...transaction,
//         position: generateRandomPosition(),
//       })));
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
//       <AnimatePresence mode="popLayout">
//         {showGodzilla && <GodzillaAnimation />}
        
//         {transactions.map((transaction) => (
//           <TransactionPopup
//             key={transaction.id}
//             amount={transaction.amount}
//             type={transaction.type}
//             position={transaction.position}
//           />
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }


// useEffect(() => {
//     const ws = new WebSocket("wss://your-real-time-api-endpoint");
  
//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       const transaction: Transaction = {
//         id: data.txId,
//         amount: data.amount,
//         type: data.isBuy ? "buy" : "sell",
//         timestamp: Date.now(),
//       };
//       handleNewTransaction(transaction);
//     };
  
//     return () => ws.close();
//   }, [handleNewTransaction]);