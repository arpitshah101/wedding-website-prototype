import '@styles/lenis.css';

import Lenis from 'lenis';

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Expose the instance so page-level scripts (e.g. custom navbars) can
// trigger smooth scrolling to anchors.
window.lenisScroll = lenis;
