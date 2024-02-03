import React, { useState, useCallback } from 'react';
import { StaticImageData } from 'next/image';
import { AddLink, Button } from './UI';
import { fbEvent, gtagEvent } from '../utils/analyticsUtil';
import { Select } from '../components/UI/Select';
import { Switch } from '../components/UI/Switch';
import Image from 'next/image';

export type HeroProps = {
  src?: StaticImageData;
  title?: string;
  subTitle?: string;
  showRegister?: boolean;
};

const DefaultHero = (props: HeroProps) => {
  const { title, subTitle, src, showRegister, realtors } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [special, setSpecial] = useState('');
  const [language, setLanguage] = useState('');
  const [zipCode, setZipCode] = useState<number>(0);
  const [realtor, setRealtor] = useState(undefined);

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'arabic', label: 'Arabic' },
  ];

  // Buyer/Seller Agent options
  const agentOptions = [
    { value: 'buyer', label: 'Buyer Agent' },
    { value: 'seller', label: 'Seller Agent' },
    { value: 'foreclosure', label: 'Foreclosure' },
    { value: 'short-sale', label: 'Short Sale' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'relocation', label: 'Relocation' },
  ];

  const handleClick = useCallback(() => {
    setLoading(true);

    // Assuming fbEvent and gtagEvent are functions defined elsewhere
    fbEvent('try_me', {
      content_name: 'find a realtor',
      content_category: 'user_interaction',
      value: 1,
    });

    gtagEvent({
      action: 'try_me',
      category: 'user_interaction',
      label: 'find a realtor',
      value: 1,
    });

    const filteredRealtors = realtors.filter((realtor) => {
      const zipCodeIncluded = realtor?.data?.serviceZipCodes?.includes(zipCode);
      const languageMatches = !language || realtor?.data?.language === language;
      const specialMatches = !special || realtor?.data?.special === special;

      return zipCodeIncluded && (languageMatches || specialMatches);
    });

    if (filteredRealtors.length > 0) {
      // Adding a 1-second timeout
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * filteredRealtors.length);
        const randomRealtor = filteredRealtors[randomIndex];
        setRealtor(randomRealtor);
        setLoading(false);
      }, 1000); // 1000 milliseconds = 1 second
    } else {
      // Adding a 1-second timeout
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * realtors.length);
        const randomRealtor = realtors[randomIndex];
        setRealtor(randomRealtor);
        setLoading(false);
      }, 1000); // 1000 milliseconds = 1 second
    }
  }, [language, special, zipCode]);

  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-md">
      <div>
        <div className="text-4xl mb-6 text-black">Find Agent with one click</div>
        <input
          className="border border-gray-300 rounded p-2 w-64 text-black"
          placeholder="City/Zip Code"
          onChange={(event) => setZipCode(event.target.value)}
        />
        <Select
          id="language-select"
          options={languageOptions}
          placeholder="Select Language"
          onChange={(selectedOption) => {
            setLanguage(selectedOption.value);
          }}
          className="my-6"
        />

        {/* Buyer/Seller Agent Select */}
        <Select
          id="agent-type-select"
          options={agentOptions}
          placeholder="Select Agent Type"
          onChange={(selectedOption) => {
            setSpecial(selectedOption?.value);
          }}
          className="my-6"
        />
        <Switch label="Online" />
        <Button onClick={handleClick} color="secondary" className="mt-6" loading={loading}>
          Find Agent
        </Button>
      </div>
      <div>
        {!realtor ? (
          <div className="text-2xl text-black">Try Me</div>
        ) : (
          <AddLink to={`/agent/${realtor?.data?.userName}`}>
            <Image
              width={400}
              height={200}
              style={{ width: '400px', height: '200px' }}
              src={realtor?.data?.photo || ''}
              alt="Find Nearby Agent"
            />
            <div className="my-2 flex flex-col gap-2 text-black">
              <div className="text-2xl font-bold">{realtor?.data?.name || ''}</div>
              <div>{realtor?.data?.phone || ''}</div>
              <div className="text-sm font-italic">{realtor?.data?.location || ''}</div>
            </div>
          </AddLink>
        )}
      </div>
    </div>
  );
};

export default DefaultHero;
