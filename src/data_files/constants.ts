import ogImageSrc from '@images/ganesh-motif.svg';

export const SITE = {
  title: 'Arpit & Rushita',
  tagline: '',
  description: '',
  description_short: '',
  url: 'https://arpitshah101.github.io/wedding-website-prototype',
  author: 'Arpit Shah',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Wedding Invitation`,
  description:
    "Join us for the wedding celebration of Arpit and Rushita! We're excited to share this special day with our loved ones. Save the date and get ready for a memorable event filled with love, laughter, and joy. We can't wait to celebrate with you!",
  image: ogImageSrc,
};
