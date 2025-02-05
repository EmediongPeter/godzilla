import { Transaction } from "@/app/components/TransactionIndicator";

const indicator_transactions: Transaction[] = [
    { id: "tx_001", amount: 0.2, type: "buy", timestamp: 1707081600000 },  // Small buy
    { id: "tx_002", amount: 1.5, type: "buy", timestamp: 1707081700000 },  // Large buy (Godzilla trigger)
    { id: "tx_003", amount: 0.8, type: "sell", timestamp: 1707081800000 }, // Small sell
    { id: "tx_004", amount: 2.3, type: "buy", timestamp: 1707081900000 },  // Large buy (Godzilla trigger)
    { id: "tx_005", amount: 0.6, type: "buy", timestamp: 1707082000000 },  // Small buy
    { id: "tx_006", amount: 3.0, type: "buy", timestamp: 1707082100000 },  // Large buy (Godzilla trigger)
    { id: "tx_007", amount: 0.9, type: "sell", timestamp: 1707082200000 }, // Small sell
    { id: "tx_008", amount: 1.2, type: "buy", timestamp: 1707082300000 },  // Large buy (Godzilla trigger)
    { id: "tx_009", amount: 0.4, type: "buy", timestamp: 1707082400000 },  // Small buy
    { id: "tx_010", amount: 2.7, type: "buy", timestamp: 1707082500000 },  // Large buy (Godzilla trigger)
  ];
  
  export default indicator_transactions;
  