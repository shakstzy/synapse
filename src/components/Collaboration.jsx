import { useState, useEffect } from "react";
import { websitesquare, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  const [expanded, setExpanded] = useState(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame;
    let last = performance.now();
    const speed = 360 / 16_000; // 16s per full rotation
    function animate(now) {
      const delta = now - last;
      last = now;
      setRotation((r) => (r + speed * delta) % 360);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li
                className={`mb-3 py-3 transition-all duration-300 rounded-lg cursor-pointer ${expanded === item.id ? "bg-n-7/60 px-4 py-6 shadow-lg" : ""}`}
                key={item.id}
                onMouseEnter={() => setExpanded(item.id)}
                onMouseLeave={() => setExpanded(null)}
              >
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {expanded === item.id && (
                  <div className="transition-all duration-[900ms] ease-in-out overflow-hidden mt-3" style={{opacity: expanded === item.id ? 1 : 0, maxHeight: expanded === item.id ? '10rem' : '0', transitionProperty: 'opacity, max-height'}}>
                    <p className="body-2 text-n-4">
                      {item.description}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Button href="https://t.me/synpsxyz/1">Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative flex w-[22rem] aspect-square border border-n-6 rounded-full scale-75 md:scale-100 items-center justify-center">
            <div className="w-[6rem] aspect-square p-[0.2rem] bg-conic-gradient rounded-full flex items-center justify-center z-10">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={websitesquare}
                  width={48}
                  height={48}
                  alt="synapse"
                />
              </div>
            </div>
            <ul className="absolute inset-0 translate-x-[-1.5rem] translate-y-[-1.5rem]">
              {collabApps.map((app, index) => {
                const angle = (360 / collabApps.length) * index;
                return (
                  <li
                    key={app.id}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle + rotation}deg) translateY(-11rem) rotate(${-angle - rotation}deg)`,
                      transformOrigin: 'center center',
                    }}
                  >
                    <div className="flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl items-center justify-center">
                      <img
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
