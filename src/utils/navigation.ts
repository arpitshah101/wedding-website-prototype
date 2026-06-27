// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/wedding-website-prototype/' },
  { name: 'Our Story', url: '/wedding-website-prototype/story' },
  { name: 'Travel & Accommodation', url: '/wedding-website-prototype/travel-and-accommodation' },
  { name: 'Schedule', url: '/wedding-website-prototype/schedule' },
  { name: 'Things to do', url: '/wedding-website-prototype/things-to-do' },
  { name: 'Q&A', url: '/wedding-website-prototype/q-and-a' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/wedding-website-prototype/welcome-to-docs/' },
      { name: 'Tools & Equipment', url: '/wedding-website-prototype/products' },
      { name: 'Construction Services', url: '/wedding-website-prototype/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Blog', url: '/wedding-website-prototype/blog' },
      { name: 'Careers', url: '#' },
      { name: 'Customers', url: '#' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
