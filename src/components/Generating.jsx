import { loading } from "../assets";
import GiphyGif from "../assets/giphy.gif";
import { useState, useEffect } from "react";

const prompts = [
  "Build me a Bitcoin backed Yield Bearing Stablecoin",
  "Autodeposit 1000 USD to the highest yield Hyperliquid Vault",
  "Autoinvest my Yearn Finance rewards to the highest yield vault on Pendle",
  "Stake my ETH to earn rewards with the highest yield",
  "Swap 500 USDC to BTC only if the price of BTC drops below $30,000",
  "Create a DAO for my community with voting rights based on token holdings",
  "Lend my stablecoins on Aave and automatically withdraw if interest rates drop below 5%",
  "Set up a cross-chain alert for when my wallet balance exceeds 1 ETH on any chain",
];

function Typewriter({ texts, speed = 50, pause = 2000, deleteSpeed = 30, deletePause = 800 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && char < texts[index].length) {
      const timeout = setTimeout(() => setChar(char + 1), speed);
      setDisplayed(texts[index].slice(0, char + 1));
      return () => clearTimeout(timeout);
    } else if (!deleting && char === texts[index].length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    } else if (deleting && char > 0) {
      const timeout = setTimeout(() => setChar(char - 1), deleteSpeed);
      setDisplayed(texts[index].slice(0, char - 1));
      return () => clearTimeout(timeout);
    } else if (deleting && char === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((index + 1) % texts.length);
      }, deletePause);
      return () => clearTimeout(timeout);
    }
  }, [char, index, texts, speed, pause, deleting, deleteSpeed, deletePause]);

  return <span className="text-color-1 font-semibold ml-2">{displayed}|</span>;
}

const Generating = ({ className }) => {
  return (
    <div
      className={`inline-flex items-center h-[3.5rem] px-6 py-9 bg-n-8/80 rounded-[1.7rem] mx-auto overflow-x-auto min-w-0 w-full max-w-2xl ${
        className || ""
      } text-base`}
      style={{ maxWidth: 'none' }}
    >
      <img className="w-8 h-8 mr-4 rounded-full object-cover" src={GiphyGif} alt="Loading" />
      <Typewriter texts={prompts} />
    </div>
  );
};

export default Generating;
