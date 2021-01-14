import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anyi Michael | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I love building cool stuff with code.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michael Anyi',
  subtitle: 'I love building cool stuff with code.',
  cta: 'Explore',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Software Engineer with enthusiasm and focus on Fronten and backend development.',
  paragraphTwo:
    'I am passionate about building highly scalable software, creating effective and bug free solutions, and learning every single day to enable me grow professionally and become better at building cool stuff.',
  paragraphThree: 'Feel free to contact me via email at any time',
  resume:
    'https://docs.google.com/document/d/1SUgYJ4oX5lEx6Z3HiLqUpm8R6hH-JB8euSz2ywGwvFQ/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kobolet.png',
    title: 'Kobolet',
    info:
      'A Cryptocurrency backed lending platform that enables cryptocurrency holders get quick short term liquidity without having to sell their holdings.',
    info2: '',
    techStack: ['Angular', 'Firebase'],
    url: 'https://kobolet.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'borome.png',
    title: 'Boromee',
    info:
      'A social lending platform for family and friends that enforces a contract between a lender and a borrower.',
    info2: '',
    techStack: [
      'Javascript/Typescript',
      'React',
      'Redux',
      'Redux',
      'Graphql',
      'Apollo',
      'Node.Js',
      'Azure',
      'Firebase',
    ],
    url: 'https://boromee.app',
    repo: 'https://github.com/sensiblefolk/boromee', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'novagro.png',
    title: 'Novagro',
    info:
      'Novagro provides easy and safe access to profitable and impactful agriculture investment opportunites.',
    info2: '',
    techStack: [
      'Javascript/Typescript',
      'React',
      'Redux',
      'Redux',
      'Graphql',
      'Apollo',
      'Node.Js',
      'Azure',
      'Firebase',
    ],
    url: 'https://novagro.farm',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'camfly.png',
    title: 'Camfly',
    info:
      'Camfly is an on demand banner sharing tool that makes it dead simple to create editable banner images on the fly.',
    info2: '',
    techStack: [
      'Javascript/Typescript',
      'React',
      'Redux',
      'Redux',
      'Graphql',
      'Apollo',
      'Node.Js',
      'Azure',
      'Firebase',
    ],
    url: 'https://cam-fly.web.app',
    repo: 'https://github.com/sensiblefolk/camfly', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's build together",
  btn: '',
  email: 'mailto:chimezieanyi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/michaelanyi',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sensiblefolk/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sensiblefolk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
