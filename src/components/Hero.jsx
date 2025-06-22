import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState, useEffect } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

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

function Typewriter({ texts, speed = 50, pause = 2000 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  useEffect(() => {
    if (char < texts[index].length) {
      const timeout = setTimeout(() => setChar(char + 1), speed);
      setDisplayed(texts[index].slice(0, char + 1));
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setChar(0);
        setIndex((index + 1) % texts.length);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [char, index, texts, speed, pause]);
  return <span className="text-color-1 font-semibold ml-2">{displayed}|</span>;
}

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative px-0" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Intelligent Web3 Automation with
            <span className="inline relative whitespace-nowrap">&nbsp;Synapse
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-4xl mx-auto mb-6 text-n-2 lg:mb-8">
            Synapse unlocks the full potential of models by enabling seamless interaction & autonomous execution within decentralized environments
          </p>
          <Button href="https://t.me/synpsxyz/1" white>
            Experience Agents that do
          </Button>
        </div>
        <div className="relative max-w-4xl mx-auto md:max-w-7xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 sm:left-1/2 sm:right-auto sm:bottom-8 sm:w-[31rem] sm:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
