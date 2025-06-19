import MwgLGif from "../assets/MwgL.gif";
import { useState, useEffect } from "react";

const protocols = [
  "Bitcoin", "Ethereum", "BSC", "Solana", "Polygon", "Avalanche", "Cardano", "Polkadot", "Cosmos", "Algorand", "MetaMask", "TrustWallet", "Coinbase", "Ledger", "Trezor", "Uniswap", "SushiSwap", "PancakeSwap", "Curve Finance", "Aave", "Compound", "MakerDAO", "Yearn.", "Balancer", "Synthetix", "0x", "Kyber", "1inch", "Chainlink", "TheGraph", "Zapper", "Hyperliquid"
];

// Assign a random number between 25k and 150k to each protocol
const protocolData = protocols.map((name) => ({
  name,
  calls: Math.floor(Math.random() * (150000 - 25000 + 1)) + 25000
}));

function TypewriterSync({ text, speed, deleting, char, setChar, onDone }) {
  useEffect(() => {
    if (!deleting && char < text.length) {
      const timeout = setTimeout(() => setChar(char + 1), speed);
      return () => clearTimeout(timeout);
    } else if (deleting && char > 0) {
      const timeout = setTimeout(() => setChar(char - 1), speed);
      return () => clearTimeout(timeout);
    } else if ((deleting && char === 0) || (!deleting && char === text.length)) {
      if (onDone) onDone();
    }
  }, [char, deleting, text, speed, setChar, onDone]);

  return text.slice(0, char);
}

const Notification = ({ className }) => {
  const speed = 50;
  const pause = 2000;
  const deleteSpeed = 30;
  const deletePause = 800;

  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [numChar, setNumChar] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const protocol = protocolData[index];
  const numberString = protocol.calls.toLocaleString() + " calls";

  // Host typewriter for protocol name
  useEffect(() => {
    if (!deleting && char < protocol.name.length) {
      const timeout = setTimeout(() => setChar(char + 1), speed);
      return () => clearTimeout(timeout);
    } else if (!deleting && char === protocol.name.length) {
      setShowNumber(true);
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    } else if (deleting && char > 0) {
      setShowNumber(false);
      const timeout = setTimeout(() => setChar(char - 1), deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (deleting && char === 0) {
      setShowNumber(false);
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((index + 1) % protocolData.length);
      }, deletePause);
      return () => clearTimeout(timeout);
    }
  }, [char, deleting, protocol.name.length, index, speed, pause, deleteSpeed, deletePause]);

  // Slave typewriter for number
  useEffect(() => {
    if (showNumber && !deleting && numChar < numberString.length) {
      const timeout = setTimeout(() => setNumChar(numChar + 1), speed);
      return () => clearTimeout(timeout);
    } else if (showNumber && deleting && numChar > 0) {
      const timeout = setTimeout(() => setNumChar(numChar - 1), deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (!showNumber && numChar !== 0) {
      setNumChar(0);
    }
  }, [showNumber, deleting, numChar, numberString.length, speed, deleteSpeed]);

  return (
    <div
      className={`${className || ""} flex items-start p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={MwgLGif}
        width={62}
        height={62}
        alt="protocol gif"
        className="rounded-full object-cover"
        style={{ background: '#000' }}
      />
      <div className="flex-1 flex flex-col items-start min-w-0">
        <div className="mb-1 flex flex-col items-start w-full min-w-0">
          <div className="flex flex-row items-start w-full min-w-0">
            <span className="text-base font-semibold text-n-1 whitespace-nowrap">
              {protocol.name.slice(0, char)}|
            </span>
            <span className="text-n-3 text-base font-semibold ml-1">MCP</span>
          </div>
          <span className="body-2 text-n-13 mt-1 text-left w-full">
            {numberString.slice(0, numChar)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;