import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Enabling Independent Agentic Commerce"
          text="Synapse elevates the capabilities of intelligent applications, enabling self-governing task completion and redefining intelligent commerce."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[22rem] ml-auto">
              <h4 className="h4 mb-4">Powering Autonomous Operations</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Synapse augments users on chain capabilities through
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item) => (
                  <li
                    key={item.id}
                    className="py-4 border-t border-n-6 cursor-pointer"
                    onMouseEnter={() => setExpandedService(item.id)}
                    onMouseLeave={() => setExpandedService(null)}
                  >
                    <div className="flex items-center">
                      <img width={24} height={24} src={check} />
                      <h6 className="body-2 ml-4 font-bold">{item.title}</h6>
                    </div>
                    <div
                      className="grid transition-all duration-500 ease-in-out"
                      style={{
                        gridTemplateRows:
                          expandedService === item.id ? "1fr" : "0fr",
                        opacity: expandedService === item.id ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="body-2 text-n-3 pl-10 pt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Streamlined Product Development</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Synapse abstracts away complex integrations, allowing you to focus on user experience and innovation.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Unlock New Financial Products</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world's most powerful engine for composing novel, AI-driven financial instruments. What will you build? Combine MCP servers to create custom, composable products and monetize your creations.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;