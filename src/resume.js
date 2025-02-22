// 13 colors
export const COLORS = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

export const SECTIONS = [
  "Top",
  "About",
  //'Portfolio',
  "Resume",
  // 'Work', 'Education', 'Skills',
];

export const BASIC = {
  name: "louis",
  tagline: "❤️愛 ☮life ✋敬重",
  taglineUrl: "https://en.wikipedia.org/wiki/Hacker_culture",
  about: "I teach bots to steal jobs and make games for the retired.",
  email: "lgvichy@gmail.com",
  logo: "id/icon-white.png",
  url: "https://louisgv.github.io/",
};

export const PHOTO = {
  normal: "id/selfid.jpg",
  normalInverted: "id/selfid-inverted.jpg",
  small: "id/selfid-small.jpg",
  smallInverted: "id/selfid-small-inverted.jpg",
};

export const CONTACT = {
  email: {
    icon: "envelope",
    color: COLORS[6],
    value: "louis@openrouter.com",
  },
  location: {
    icon: "globe",
    color: COLORS[5],
    name: "Seattle, Washington",
    url: "https://en.wikipedia.org/wiki/Seattle",
  },
};

export const HOBBIES = [
  {
    name: "Hacking on cutting edge technology",
    color: "orange",
    icon: "terminal",
    url: "https://louisgv.github.io/dev/www/index.html#/",
  },
  {
    name: "Reading research paper",
    color: "yellow",
    icon: "sticky note",
    url: "https://arxiv.org/",
  },
  {
    name: "Listening to scientific podcast",
    color: "olive",
    icon: "podcast",
    url: "https://twit.tv/shows/floss-weekly",
  },
  {
    name: "Kick-boxing",
    color: "green",
    icon: "grab",
    url: "https://en.wikipedia.org/wiki/Kickboxing",
  },
];

export const INTERESTS = [
  {
    name: "Robotic Automation",
    color: COLORS[11],
    icon: "radio",
    url: "https://en.wikipedia.org/wiki/Robotic_automation_software",
  },
  {
    name: "Life Extension",
    color: COLORS[10],
    icon: "power",
    url: "https://en.wikipedia.org/wiki/Life_extension",
  },
  {
    name: "Machine Learning",
    color: COLORS[9],
    icon: "linkify",
    url: "https://lmgtfy.com/?s=d&q=Machine+learning",
  },
  {
    name: "Decentralization",
    color: COLORS[8],
    icon: "unlinkify",
    url: "https://lmgtfy.com/?s=d&q=Decentralization",
  },
  {
    name: "Entertainment",
    color: COLORS[7],
    icon: "game",
    url: "https://lmgtfy.com/?s=d&q=Entertainment",
  },
];

export const SOCIALS = [
  {
    name: "tweet",
    color: COLORS[5],
    icon: "twitter",
    url: "https://x.com/louis_g_v",
    uid: "louis_g_v",
  },
  {
    name: "biz",
    color: COLORS[6],
    icon: "linkedin",
    url: "https://www.linkedin.com/in/louisgv/",
    uid: "louisgv",
  },
  {
    name: "art",
    color: COLORS[7],
    icon: "instagram",
    url: "https://www.instagram.com/louis.g.v/",
    uid: "lgvichy",
  },
  {
    name: "code",
    color: COLORS[8],
    icon: "github",
    url: "https://github.com/louisgv/",
    uid: "louisgv",
  },
];

export const WORK_SAMPLES = [
  {
    label: "networking",
    name: "HyperProxy",
    color: COLORS[0],
    url: "https://goonism.github.io/hyperproxy/",
  },
  {
    label: "production",
    name: "Janus",
    color: COLORS[1],
    url: "https://louisgv.itch.io/jhc",
  },
  {
    label: "visualization",
    name: "Pattar",
    color: COLORS[2],
    url: "https://louisgv.github.io/pattar/",
  },
];

export const PORTFOLIOS = [
  {
    name: "SmartLook Web",
    type: "Web Application",
    color: COLORS[0],
    description: "TurboTax's real-time customer support feature",
    technology: "ES6, React.js, CSS, Glance",
    image: "project/smartlook_mobile.gif",
    role: "Lead Front-end Engineer",
    license: "PROPRIETARY",
    status: "In production, TurboTax 2016",
    url: "https://www.youtube.com/watch?v=E19Znq9EDZ0",
  },
  {
    name: "Cryptoville",
    type: "Web Application",
    color: COLORS[1],
    description: "Decentralized market making platform for agriculture",
    license: "MIT",
    role: "Core Contributor",
    technology: "React.js, Lisk",
    image: "project/cryptoville.gif",
    status: "Opensource Project",
    url: "https://www.crypto-ville.herokuapp.com",
  },
  {
    name: "JanusLauncher",
    type: "Mobile Application",
    color: COLORS[2],
    description:
      "An Android launcher with hand written letter recognition capability for quick app browsing",
    role: "Author",
    license: "MIT",
    technology:
      "Kotlin, Android Studio Canary, TensorFlow, Jupyter Notebook, EMNIST database",
    image: "project/janusLauncher.gif",
    status: "Opensource Project",
    url: "https://github.com/louisgv/janusLauncher",
  },
  {
    name: "VegaHub",
    type: "Hybrid Application",
    color: COLORS[3],
    description:
      "A hybrid mobile application used to control any robot implementing Cumulonimbus's ROS bridge",
    role: "Lead Front-end Engineer",
    license: "PROPRIETARY",
    status: "N/A",
    technology:
      "Google Mobile Kit (Bluetooth module), Firebase, Ionic, Cordova, CrossWalk, ES5, SASS",
    image: "project/vegahub.gif",
    url: "https://clnb.io/vega/",
  },
];

// https://docs.google.com/document/d/15Z-Bh6XjF8hPJpS4_dtiS2Ylz8Lnpun5rudPj_ewrqs/edit?usp=sharing

export const RESUME = {
  // "embedded": "https://docs.google.com/document/d/e/2PACX-1vT9bDNvMitcORMx7nmL0-zOwDkTPMRZXuwR8OwN0j_1A1IMqm9hX4X5zY7_a27Os_CSGGnCJPkHwVYp/pub?embedded=true",
  embedded:
    "https://docs.google.com/document/d/15Z-Bh6XjF8hPJpS4_dtiS2Ylz8Lnpun5rudPj_ewrqs/preview",
  external:
    "https://docs.google.com/document/d/15Z-Bh6XjF8hPJpS4_dtiS2Ylz8Lnpun5rudPj_ewrqs/edit?usp=sharing",
};

export const REFERENCES = [
  {
    url: "https://reactjs.org/",
    name: "React.js",
  },
  {
    url: "https://react.semantic-ui.com/",
    name: "Semantic-ui",
  },
  {
    url: "https://github.com/negomi/react-burger-menu/",
    name: "react-burger-menu",
  },
  {
    url: "https://github.com/oliviertassinari/react-swipeable-views",
    name: "react-swipeable-views",
  },
];

export const LICENSE = {
  name: "MIT License",
  url: "https://en.wikipedia.org/wiki/MIT_License",
};
