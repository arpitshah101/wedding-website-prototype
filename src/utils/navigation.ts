import { getBasePath } from '@/utils/basePath';

const homePath = getBasePath('/');

const navBarLinks = [
  { name: 'Home', url: `${homePath}#v2-home` },
  { name: 'A Note From Us', url: `${homePath}#v2-note-from-us` },
  { name: 'The Wedding Week', url: `${homePath}#v2-wedding-week` },
  { name: 'Booking Your Stay', url: `${homePath}#v2-booking-your-stay` },
  { name: 'Things to do', url: `${homePath}#v2-things-to-do` },
  { name: 'Our Story', url: `${homePath}#v2-story` },
  { name: 'Q&A', url: `${homePath}#v2-q-and-a` },
];

export default {
  navBarLinks,
};
