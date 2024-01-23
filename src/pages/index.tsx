import { DefaultHero } from '../components';
import { AddLink, Header, Container } from '../components/UI';
import Image from 'next/image';

const QuickSearch = () => {
  const script = `
	document.currentScript.replaceWith(ihfKestrel.render({
		"component": "gallerySliderWidget",
		"rows": 1,
		"navigation": true,
		"nav": "top",
		"auto": true,
		"maxResults": 25,
		"status": "active",
		"featured": true,
		"effect": "slide"
	}));
  `;

  return <div dangerouslySetInnerHTML={{ __html: `<script>${script}</script>` }} />;
};
const HomePage = () => {
  const realEstateMarkets = [
    {
      name: 'Washington Dc',
      id: '2576362',
    },
    {
      name: 'Baltimore',
      id: '2722363',
    },
    {
      name: 'Alexandria',
      id: '2722364',
    },
    {
      name: 'Phildelphia',
      id: '2722365',
    },
    {
      name: 'York',
      id: '2722366',
    },
  ];

  return (
    <Container
      seoProps={{
        title: 'JubileeSpace - Home',
        description:
          'JubileeSpace platform streamlines the process of matching home buyers with top-producing agents, ensuring you find the best fit for your needs.',
      }}
    >
      <DefaultHero
        title="Starting your home buying journey?"
        subTitle="Be sure to check your credit shore to see what you can qualify for."
        showRegister
      />
      <div className="mt-6">
        <Header as="h2" className="text-white">
          Quickly Find Your Next Home
        </Header>
        <div className="flex flex-wrap flex-row justify-between my-6">
          {realEstateMarkets.map((market) => (
            <AddLink
              to={`/listing-report?id=${market.id}`}
              className="text-2xl text-blue-500 hover:text-blue-400"
            >
              <div>{market.name}</div>
            </AddLink>
          ))}
        </div>
        {/*<QuickSearch />*/}
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-2">
        <AddLink
          className="my-8 transition-transform transform hover:-translate-y-2"
          to="/grants/maryland-smartbuy-program"
        >
          <Header as="h3" className="my-8">
            Maryland SmartBuy Program
          </Header>
          <Image
            width={500}
            height={500}
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
            width={500}
            height={200}
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
            width={500}
            height={200}
            src="https://images.ctfassets.net/v3wxyl8kvdve/7cAJnxebausy6lLOceW9j6/d96cb036da1d3deede1d8c1ea4d6e1ff/VH_Logo_RGB_Pine_Green_stacked.png"
            alt="Virginia Assistance Grant"
          />
        </AddLink>
      </div>
      {/*<Checklist />*/}
    </Container>
  );
};

export default HomePage;
