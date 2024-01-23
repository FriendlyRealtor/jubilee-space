import React, { useEffect } from 'react';
import { Container } from '../../components/UI';
import { useRouter } from 'next/router';

const ListingReportPage = () => {
  const router = useRouter();

  const { id } = router.query;
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

  const selectedMarket = realEstateMarkets.find((market) => market.id === id);
  const newDescription = `JubileeSpace has homes for sale in ${selectedMarket?.name}. View listing photos, review sales history, and use our detailed real estate filters to find the perfect place.`;

  return (
    <Container
      seoProps={{
        title: 'JubileeSpace - Listing Report',
        description: newDescription,
      }}
    >
      <div id="content-container" />
    </Container>
  );
};

export default ListingReportPage;
