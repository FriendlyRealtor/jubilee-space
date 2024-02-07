import React, { useEffect, useState } from 'react';
import { Image, Header, Container } from '../../components/UI';
import { SendMessageModal } from '../../components';
import Link from 'next/link';
import { firestore } from '../../context';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import _ from 'lodash';

const FindAnAgentPage = ({ users }) => {
  const [realtors, setRealtors] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [serviceAreas, setServiceAreas] = useState<string[]>([]);

  const realtorsPerPage = 9;

  // Calculate the current posts to display
  const indexOfLast = currentPage * realtorsPerPage;
  const indexOfFirst = indexOfLast - realtorsPerPage;
  const currentRealtors = realtors.slice(indexOfFirst, indexOfLast);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (users?.length) {
      // Sort the users array by updatedAt using Moment.js
      const sortedUsers = users.slice().sort((a, b) => {
        const dateA = a.data.updatedAt ? moment(a.data.updatedAt.seconds * 1000) : null;
        const dateB = b.data.updatedAt ? moment(b.data.updatedAt.seconds * 1000) : null;

        // Compare dates
        if (dateA && dateB) {
          return dateB - dateA;
        } else if (dateA) {
          return -1; // Place items without updatedAt towards the end
        } else if (dateB) {
          return 1; // Place items without updatedAt towards the end
        } else {
          return 0; // Both items don't have updatedAt
        }
      });

      setRealtors(sortedUsers);
    }
  }, [users]);

  return (
    <Container
      seoProps={{
        title: 'JubileeSpace - Real Estate Agents in Your Neighborhood',
        description:
          ' Connecting you with the best real estate agents in your area. At JubileeSpace, we make finding your dream home a breeze.',
      }}
    >
      <div className="w-full py-12">
        <div className="container grid gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Real Estate Agents in Your Neighborhood
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Connecting you with the best real estate agents in your area. At JubileeSpace, we make
              finding your dream home a breeze.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-12">
        <div className="container grid md:gap-6">
          <div className="mx-auto grid max-w-md items-start gap-2 md:max-w-none md:grid-cols-2 lg:gap-4 xl:grid-cols-3">
            {realtors?.length &&
              realtors.map((realtor) => {
                return (
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm w-full flex flex-col gap-2 h-[320px]"
                    data-v0-t="card"
                    key={realtor.id}
                  >
                    <div className="flex flex-col space-y-1.5 p-6 pb-0">
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold">{realtor.data.name}</h2>
                      </div>
                    </div>
                    {realtor.data.bio && (
                      <div className="p-6 pt-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {realtor.data.bio.length > 150
                            ? realtor.data.bio.slice(0, 150) + '...'
                            : realtor.data.bio}
                        </p>
                      </div>
                    )}

                    {realtor.data?.services?.length > 0 && (
                      <div>
                        <div className='text-center mb-4 text-md'>Services Offered</div>
                        <div className="flex justify-around items-center flex-wrap">
                          {realtor.data.services.map((service) => {
                            return <div className="text-white bg-blue-500 px-2 text-sm font-medium">{service.name}</div>;
                          })}
                        </div>
                      </div>
                    )}
                    <div className="flex items-center p-6">
                      <Link
                        href={`/agent/${realtor.data.userName}`}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  try {
    const userRef = collection(firestore, 'users');
    const querySnapshot = await getDocs(userRef);

    const usersData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    const results = JSON.parse(JSON.stringify(usersData));

    let filteredRealtors = [];
    if (results?.length) {
      filteredRealtors = results.filter((user) => user.data.username || user.data.userName);
      if (filteredRealtors.length) {
        const updatedRealtors = await Promise.all(
          filteredRealtors.map(async (realtor) => {
            if (realtor.data.serviceZipCodes?.length) {
              const zipcodes = realtor.data.serviceZipCodes.join(',');

              try {
                const response = await fetch(
                  `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodes}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
                );
                const data = await response.json();

                if (data?.results?.length) {
                  const postcodeLocalities = data.results
                    .map((field) => field.postcode_localities || [])
                    .flat();

                  return {
                    ...realtor,
                    data: {
                      ...realtor.data,
                      serviceZipCodes: postcodeLocalities,
                    },
                  };
                }
              } catch (error) {
                console.log('Error getting zip code data', error);
              }
            }
            return realtor;
          }),
        );

        return {
          props: {
            users: updatedRealtors || [],
          },
        };
      }
    }
  } catch (error) {
    return {
      props: {
        users: [],
      },
    };
  }
}

export default FindAnAgentPage;
