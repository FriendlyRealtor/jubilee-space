import { DefaultHero } from '../components';
import { AddLink, Header, Container } from '../components/UI';
import Image from 'next/image';
import { firestore } from '../context';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const HomePage = ({ users }) => {
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    if (users?.length) {
      setRealtors(users);
    }
  }, [users]);

  return (
    <Container
      seoProps={{
        title:
          'JubileeSpace platform streamlines the process of matching home buyers with top-producing agents, ensuring you find the best fit for your needs.',
        description:
          'JubileeSpace platform streamlines the process of matching home buyers with top-producing agents, ensuring you find the best fit for your needs.',
      }}
    >
      <DefaultHero
        title="Starting your home buying journey?"
        subTitle="Be sure to check your credit shore to see what you can qualify for."
        realtors={realtors}
        showRegister
      />
      <div className="flex flex-row justify-between items-center my-6">
        <AddLink
          className="transition-transform transform hover:-translate-y-2"
          to="/grants/maryland-smartbuy-program"
        >
          <Header as="h3" className="my-8">
            Maryland SmartBuy Program
          </Header>
          <Image
            width={400}
            height={200}
            style={{ width: '400px', height: '200px' }}
            src="https://images.ctfassets.net/v3wxyl8kvdve/3e4nrqrsn1ZinOk95n6dA9/2d72c227fd013b90d03babd869d83e41/Banner.png"
            alt="Maryland SmartBuy Program"
          />
        </AddLink>
        <AddLink
          className="my-8 transition-transform transform hover:-translate-y-2"
          to="/grants/washington-dc-inclusionary-zoning-iz-affordable-housing-program"
        >
          <Header as="h3" className="my-8">
            Dc Affordable Housing Program
          </Header>
          <Image
            width={400}
            height={200}
            style={{ width: '400px', height: '200px' }}
            src="https://images.ctfassets.net/v3wxyl8kvdve/4YUf1AZzzChI7SzrspcYa8/38853b97b216ea9c98a54f2247fcec86/Apt-full4.jpg"
            alt="Dc Affordable Housing Program"
          />
        </AddLink>
        <AddLink
          className="my-8 transition-transform transform hover:-translate-y-2"
          to="/grants/virginia-down-payment-assistance-grant"
        >
          <Header as="h3" className="my-8">
            Virginia Assistance Grant
          </Header>
          <Image
            width={400}
            height={200}
            style={{ width: '400px', height: '200px' }}
            src="https://images.ctfassets.net/v3wxyl8kvdve/7cAJnxebausy6lLOceW9j6/d96cb036da1d3deede1d8c1ea4d6e1ff/VH_Logo_RGB_Pine_Green_stacked.png"
            alt="Virginia Assistance Grant"
          />
        </AddLink>
      </div>
      <div className="text-3xl">Why Choose Us</div>
      <div className="my-4">
        World's first virtual staging algorithm powered by artificial intelligence. Developed at
        Harvard Innovation Labs.
      </div>
      <div>
        <div className="flex flex-row justify-between mb-6">
          <div className="bg-gray-400 w-full mr-6 h-[150px] text-center rounded-md">
            <div>Discounted Services in Real Estate</div>
            <div className="my-2">
              Helping people in the real estate industry find discounted services to enhance their
              business.
            </div>
          </div>
          <div className="bg-gray-400 w-full mr-6 h-[150px] text-center rounded-md">
            <div>AI-Powered Home Buyer Partnerships</div>
            <div className="my-2">
              Partnering home buyers with the best agents using cutting-edge AI technology for
              successful relationships.
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mb-6">
          <div className="bg-gray-400 w-full mr-6 h-[150px] text-center rounded-md">
            <div>Extensive Loan Program Information</div>
            <div className="my-2">
              We provide detailed information on a wide range of loan programs.
            </div>
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

export default HomePage;
