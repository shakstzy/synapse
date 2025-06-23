import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  aaveLogo,
  jupiterLogo,
  tetherLogo,
  cosmosLogo,
  curveLogo,
  pancakeswapLogo,
  bnbLogo,
  solanaLogo,
  ethereumLogo,
  bitcoinLogo,
  optimismLogo,
  bitcoinPngLogo,
  ethereumPngLogo,
  calendar,
  coingeckoLogo,
  aiIcon,
  web3Icon,
  buildIcon,
  reliabilityIcon,
  integrationIcon,
  dataIcon,
  socialMediaGif,
  whiteIcon1,
  whiteIcon2,
  whiteIcon3,
  whiteIcon4,
  whiteIcon5,
  image1,
  image4,
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Benefits",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "whitepaper",
    title: "Whitepaper",
    url: "https://tinyurl.com/synpswhitepaper",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  coingeckoLogo,
];

export const brainwaveServices = [
  {
    id: "0",
    title: "Executing Intents",
    description: "Transform natural language goals into precise, actionable operations on-chain.",
  },
  {
    id: "1",
    title: "Automating Complex Workflows",
    description: "Orchestrate multi-step processes across various Web3 services seamlessly.",
  },
  {
    id: "2",
    title: "Integrating Instantly",
    description: "Bridge fragmented ecosystems with standardized Model Context Protocol (MCP) servers.",
  },
];

export const brainwaveServicesIcons = [
  whiteIcon1,
  whiteIcon2,
  whiteIcon3,
  whiteIcon4,
  whiteIcon5,
];

export const roadmap = [
  {
    id: "0",
    title: "Initial Partnerships & Free MCP Servers",
    text: "Gaining initial users by building free custom MCP servers for early partners, establishing Synapse as a deployable NLP processing service.",
    date: "June 2025",
    status: "done",
    imageUrl: image1,
    colorful: true,
  },
  {
    id: "1",
    title: "Monetization & Expansion",
    text: "Establishing revenue streams through consultancy retainers & listing feesfor custom MCP server development, attracting more integration clients and users.",
    date: "August 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Introduction of MCP Components",
    text: "Released preconfigured MCP building blocks (e.g., custody, vault, on-ramp) to enable independent builders to rapidly construct structured products. Charging percentage based on MCP server traffic.",
    date: "September 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Revenue Sharing & Community Incentives",
    text: "Launching a revenue-sharing model to incentivize community developers for high-quality, user-generated MCP servers, accelerating platform growth.",
    date: "November 2025",
    status: "progress",
    imageUrl: image4,
  },
];

export const collabText =
  "Empowering innovation with intelligent automation & robust validation to revolutionize dApp user experiences.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
    description: "Effortlessly connect AI with any Web3 protocol or traditional service through standardized Model Context Protocol (MCP) servers.",
  },
  {
    id: "1",
    title: "Smart Automation",
    description: "Transform natural language intents into precise, autonomously executed actions across complex on-chain and off-chain workflows.",
  },
  {
    id: "2",
    title: "Top-notch Security",
    description: "Built on a foundation of rigorous operator requirements, on chain event monitoring, and community-driven verification for unparalleled reliability and trust.",
  },
];

export const collabApps = [
  { id: "0", title: "Aave", icon: aaveLogo, width: 36, height: 36 },
  { id: "1", title: "Jupiter", icon: jupiterLogo, width: 36, height: 36 },
  { id: "2", title: "Tether", icon: tetherLogo, width: 36, height: 36 },
  { id: "3", title: "Cosmos", icon: cosmosLogo, width: 36, height: 36 },
  { id: "4", title: "Curve", icon: curveLogo, width: 36, height: 36 },
  { id: "5", title: "PancakeSwap", icon: pancakeswapLogo, width: 36, height: 36 },
  { id: "6", title: "BNB", icon: bnbLogo, width: 36, height: 36 },
  { id: "7", title: "Solana", icon: solanaLogo, width: 36, height: 36 },
  { id: "8", title: "Ethereum", icon: ethereumLogo, width: 36, height: 36 },
  { id: "9", title: "Bitcoin", icon: bitcoinLogo, width: 36, height: 36 },
  { id: "10", title: "Optimism", icon: optimismLogo, width: 36, height: 36 },
];

export const pricing = [
  {
    id: "0",
    title: "Developer",
    description: "Access Synapse's core platform, documentation, and community-generated MCP.",
    price: null,
    features: [
      "Access Synapse's core platform and documentation.",
      "Explore and utilize community-generated MCP servers.",
      "Develop and test your first custom MCP servers.",
      "Participate in community bounties and grants.",
    ],
    cta: "Start Free",
    url: "https://t.me/synpsxyz/5",
  },
  {
    id: "1",
    title: "Partner",
    description: "Unlock advanced tools, monetization, analytics, and priority support.",
    price: null,
    features: [
      "Includes all Developer Access features.",
      "Advanced tools for custom MCP server deployment and optimization.",
      "Monetize your MCP servers with flexible listing and revenue-sharing options.",
      "Gain insights with usage analytics for your listed servers.",
      "Receive priority support for rapid development.",
    ],
    cta: "Contact Us",
    url: "https://t.me/synpsxyz/6",
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Bespoke custom MCP server development, integration, and dedicated support.",
    price: null,
    features: [
      "Bespoke custom MCP server development and dedicated maintenance.",
      "Seamless integration with your legacy systems via the Agent Development Kit (ADK).",
      "Strategic partnerships for valuable data aggregation and licensing.",
      "Dedicated account management and personalized technical support.",
      "Maximize performance for high-volume agentic commerce.",
    ],
    cta: "Contact Us",
    url: "https://t.me/synpsxyz/7",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Unleash Truly Autonomous AI",
    text: "Empower AI to execute complex intents seamlessly across Web3 and traditional services, transforming natural language into action.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: aiIcon,
    imageUrl: background1,
  },
  {
    id: "1",
    title: "Simplify Web3 Complexity",
    text: "Abstract away fragmented infrastructure, making decentralized applications and structured products effortlessly accessible for all users.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: web3Icon,
    imageUrl: background2,
    light: true,
  },
  {
    id: "2",
    title: "Build & Monetize Innovations",
    text: "Compose bespoke structured financial products from modular MCP servers, unlocking new revenue streams and fostering rapid innovation.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: buildIcon,
    imageUrl: background3,
  },
  {
    id: "3",
    title: "Unrivaled Reliability",
    text: "Rely on community-driven maintenance and a Verifier Agent for guaranteed uptime and trusted performance across all agentic operations.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: reliabilityIcon,
    imageUrl: background4,
    light: true,
  },
  {
    id: "4",
    title: "Integrate Any System",
    text: "Extend AI's reach to legacy systems and private APIs using our Agent Development Kit (ADK), bridging the on-chain and off-chain worlds.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: integrationIcon,
    imageUrl: background5,
  },
  {
    id: "5",
    title: "Drive Strategy with Data",
    text: "Gain unique, real-time market intelligence from aggregated agent usage and intent flows, optimizing your products and investments.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: dataIcon,
    imageUrl: background6,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/SramhDmQVh",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/synpsxyz",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/synpsxyz/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/synpsxyz",
  },
  {
    id: "4",
    title: "Calendar",
    iconUrl: calendar,
    url: "https://tinyurl.com/synpsxyz",
  },
];
