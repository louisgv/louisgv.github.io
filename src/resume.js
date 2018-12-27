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
    "black"
];

export const SECTIONS = [
    'Top', 'About', 'Portfolio', 'Resume'
    // 'Work', 'Education', 'Skills',
];

export const BASIC = {
    name: "Louis Vichy",
    tagline: "#hacker",
    taglineUrl: "https://en.wikipedia.org/wiki/Hacker_culture",
    about: "I teach bots to steal jobs and make games for the retired.",
    email: "lgvichy@gmail.com",
    logo: "id/icon-white.png",
    url: "https://louisgv.ga/"
};

export const PHOTO = {
    normal: 'id/selfid.jpg',
    normalInverted: 'id/selfid-inverted.jpg',
    small: 'id/selfid-small.jpg',
    smallInverted: 'id/selfid-small-inverted.jpg'
}

export const CONTACT = {
    email: {
		icon: 'envelope',
		color: COLORS[6],
		value: 'lgvichy@gmail.com'
	},
    location: {
		icon: 'globe',
		color: COLORS[5],
        name: 'Seattle, Washington',
        url: 'https://en.wikipedia.org/wiki/Seattle'
    }
};

export const HOBBIES = [
    {
        "name": "Hacking on cutting edge technology",
        "color": "orange",
        "icon": "terminal",
        "url": "https://louisgv.github.io/dev/www/index.html#/"
    }, {
        "name": "Reading research paper",
        "color": "yellow",
        "icon": "sticky note",
        "url": "https://arxiv.org/"
    }, {
        "name": "Listening to scientific podcast",
        "color": "olive",
        "icon": "podcast",
        "url": "https://twit.tv/shows/floss-weekly"
    }, {
        "name": "Kick-boxing",
        "color": "green",
        "icon": "grab",
        "url": "https://en.wikipedia.org/wiki/Kickboxing"
    }
];

export const INTERESTS = [
    {
        "name": "Robotic Automation",
        "color": COLORS[11],
        "icon": "radio",
        "url": "https://en.wikipedia.org/wiki/Robotic_automation_software"
    }, {
        "name": "Life Extension",
        "color": COLORS[10],
        "icon": "power",
        "url": "https://en.wikipedia.org/wiki/Life_extension"
    }, {
        "name": "Machine Learning",
        "color": COLORS[9],
        "icon": "linkify",
        "url": "https://lmgtfy.com/?s=d&q=Machine+learning"
    }, {
        "name": "Decentralization",
        "color": COLORS[8],
        "icon": "unlinkify",
        "url": "https://lmgtfy.com/?s=d&q=Decentralization"
    }, {
        "name": "Entertainment",
        "color": COLORS[7],
        "icon": "game",
        "url": "https://lmgtfy.com/?s=d&q=Entertainment"
    }
]

export const SOCIALS = [
    {
        "name": "R.I.T",
        "color": COLORS[4],
        "icon": "pied piper hat",
        "url": "https://people.rit.edu/hhn2884/230/",
        "uid": "lab"
    }, {
        "name": "Twitter",
        "color": COLORS[5],
        "icon": "twitter",
        "url": "https://twitter.com/LGVichy",
        "uid": "LGVichy"
    }, {
        "name": "LinkedIn",
        "color": COLORS[6],
        "icon": "linkedin",
        "url": "https://www.linkedin.com/in/louisgv/",
        "uid": "louisgv"
    }, {
        "name": "GitHub",
        "color": COLORS[8],
        "icon": "github",
        "url": "https://github.com/louisgv/",
        "uid": "louisgv"
    }
]

export const WORK_SAMPLES = [
    {
        "name": "L'eau",
        "color": COLORS[0],
        "url": "https://louisgv.ga/poker/"
    }, {
        "name": "Vize",
        "color": COLORS[1],
        "url": "https://louisgv.ga/vize/"
    }, {
        "name": "Pattar",
        "color": COLORS[2],
        "url": "https://louisgv.ga/pattar/"
    }
]

export const PORTFOLIOS = [
    {
        "name": "SmartLook Web",
        "type": "Web Application",
        "color": COLORS[0],
        "description": "TurboTax's real-time customer support feature",
        "technology": "ES6, React.js, CSS, Glance",
        "image": "project/smartlook_mobile.gif",
        "role": "Lead Front-end Engineer",
        "license": "PROPRIETARY",
        "status": "In production, TurboTax 2016",
        "url": "https://www.youtube.com/watch?v=E19Znq9EDZ0"
    }, {
        "name": "Cryptoville",
        "type": "Web Application",
        "color": COLORS[1],
        "description": "Decentralized market making platform for agriculture",
        "license": "MIT",
        "role": "Core Contributor",
        "technology": "React.js, Lisk",
        "image": "project/cryptoville.gif",
        "status": "Opensource Project",
        "url": "https://www.crypto-ville.herokuapp.com"
    }, {
        "name": "JanusLauncher",
        "type": "Mobile Application",
        "color": COLORS[2],
        "description": "An Android launcher with hand written letter recognition capability for quick app browsing",
        "role": "Author",
        "license": "MIT",
        "technology": "Kotlin, Android Studio Canary, TensorFlow, Jupyter Notebook, EMNIST database",
        "image": "project/janusLauncher.gif",
        "status": "Opensource Project",
        "url": "https://github.com/louisgv/janusLauncher"
    }, {
        "name": "VegaHub",
        "type": "Hybrid Application",
        "color": COLORS[3],
        "description": "A hybrid mobile application used to control any robot implementing Cumulonimbus's ROS bridge",
        "role": "Lead Front-end Engineer",
        "license": "PROPRIETARY",
        "status": "N/A",
        "technology": "Google Mobile Kit (Bluetooth module), Firebase, Ionic, Cordova, CrossWalk, ES5, SASS",
        "image": "project/vegahub.gif",
        "url": "https://clnb.io/vega/"
    }
];

export const RESUME = {
    // "embedded": "https://docs.google.com/document/d/e/2PACX-1vT9bDNvMitcORMx7nmL0-zOwDkTPMRZXuwR8OwN0j_1A1IMqm9hX4X5zY7_a27Os_CSGGnCJPkHwVYp/pub?embedded=true",
    "embedded": "https://docs.google.com/document/d/1_UE4yS3lA81l3HdBwhKABcKXAJIO0HyDkcaOxNAjJPs/preview",
    "external": "https://docs.google.com/document/d/1_UE4yS3lA81l3HdBwhKABcKXAJIO0HyDkcaOxNAjJPs/edit?usp=sharing"
};

export const REFERENCES = [
    {
        url: 'https://reactjs.org/',
        name: 'React.js'
    }, {
        url: 'https://react.semantic-ui.com/',
        name: 'Semantic-ui'
    }, {
        url: 'https://github.com/negomi/react-burger-menu/',
        name: 'react-burger-menu'
    }, {
        url: 'https://github.com/oliviertassinari/react-swipeable-views',
        name: 'react-swipeable-views'
    }
];

export const LICENSE = {
    name: 'MIT License',
    url: 'https://en.wikipedia.org/wiki/MIT_License'
};
