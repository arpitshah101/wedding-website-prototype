import { getBasePath } from '@/utils/basePath';

// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: getBasePath('/') },
  { name: 'Our Story', url: getBasePath('/story') },
  {
    name: 'Travel & Accommodation',
    url: getBasePath('/travel-and-accommodation'),
  },
  { name: 'Schedule & Dress Code', url: getBasePath('/schedule') },
  { name: 'Things to do', url: getBasePath('/things-to-do') },
  { name: 'Q&A', url: getBasePath('/q-and-a') },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: getBasePath('/welcome-to-docs/') },
      { name: 'Tools & Equipment', url: getBasePath('/products') },
      { name: 'Construction Services', url: getBasePath('/services') },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Blog', url: getBasePath('/blog') },
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
