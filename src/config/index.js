module.exports = {
  siteTitle: 'Jay Kakkad | Software Engineer',
  siteDescription:
    'Jay Kakkad is a software engineer based in New York who specializes in developing exceptional, high-quality websites and applications.',
  siteKeywords:
    'Jay, Kakkad, Jay Kakkad, software, engineer, machine learning, data engineering, data science, data, back-end, front-end, web developer, javascript, python, java, stony brook, SBU, SQL, stony brook university',
  siteUrl: 'https://jay-kakkad.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-180329681-1',
  googleVerification: '',
  name: 'Jay Kakkad',
  location: 'Stony Brook, NY',
  email: 'jpkakkad97@gmail.com',
  github: 'https://github.com/jay-kakkad',
  twitterHandle: '@jpkakkad',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jay-kakkad',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jay-kakkad',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jay_kakkad',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jpkakkad',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#FFF40F',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
