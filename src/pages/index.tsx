import { DefaultHero } from '../components';
import { AddLink, Header, Container } from '../components/UI';
import Image from 'next/image';
import { firestore } from '../context';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const HomePage = () => {
  return (
    <Container
      seoProps={{
        title:
          'JubileeSpace platform streamlines the process of matching home buyers with top-producing agents, ensuring you find the best fit for your needs.',
        description:
          'JubileeSpace platform streamlines the process of matching home buyers with top-producing agents, ensuring you find the best fit for your needs.',
      }}
    >
      <section className="w-full">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Buy a home without the realtor
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              No agent? No worries. Secure your dream home with our platform offering discounted
              home buying services, saving you both money and time.
            </p>
          </div>
          <div>
            <Link
              className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/find-an-agent"
            >
              Find Your Services
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
