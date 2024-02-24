import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'JubileeSpace',
  description:
    'Discover your dream home with our platform! We specialize in assisting first-time buyers, providing expert guidance and making the home buying process seamless. Find your perfect match while gaining a comprehensive understanding of the journey.',
  openGraph: {
    type: 'website',
    title: 'JubileeSpace',
    url: 'https://jubileespace.com/',
    siteName: 'JubileeSpace',
    description:
      'Discover your dream home with our platform! We specialize in assisting first-time buyers, providing expert guidance and making the home buying process seamless. Find your perfect match while gaining a comprehensive understanding of the journey.',
    images: [
      {
        url: 'https://images.ctfassets.net/v3wxyl8kvdve/2AGCOrStJnbQsTSqmKLUhS/9a3b20cd39a8df614f53b7f61a71724a/Jubilee_Space_4_C-2.png',
        width: 850,
        height: 650,
        alt: 'JubileeSpace Logo',
      },
    ],
  },
  twitter: {
    handle: '@FRealtorApp',
    site: '@FRealtorApp',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '1339976196848860',
  },
};

export default config;
