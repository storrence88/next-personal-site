const title = 'Steven Torrence – Software Developer';
const description =
  'Web developer, Ruby and Javascript enthusiast, and life long learner.';

const SEO = {
  title,
  description,
  canonical: 'https://steventorrence.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://steventorrence.com',
    title,
    description,
    images: [
      {
        url: '/static/images/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@storrence_88',
    site: 'https://twitter.com/storrence_88',
    cardType: 'summary_large_image'
  }
};

export default SEO;
