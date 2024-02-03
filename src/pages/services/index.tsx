import styles from '../../styles/styles';
import { Hero, Business } from '../../components';
import { Container } from '../../components/UI';
import Image from 'next/image';
import { reshilow, coldwellBanker, compass, reMax, kwRealty } from '../../assets';

const ServicesPage = () => {
  return (
    <Container
      seoProps={{
        title: 'JubileeSpace - Agent Services',
        description:
          'Tailored exclusively for agents, our toolkit provides resources to elevate your real estate expertise. Join our Event Center to discover opportunities and unlock benefits for your real estate success.',
      }}
    >
      <div className={`w-full overflow-hidden`}>
        <Business />
        <Hero />
        <div>
          <div className="text-2xl p-4 rounded-md text-white text-center font-bold">
            Agents from all major brokerages use our service
          </div>
          <div className="my-6 flex-row flex gap-6 flex-wrap items-center justify-between bg-white p-4 rounded-md">
            <Image src={reshilow} alt="reshilow realty" className="w-[400px] h-[100px]" />
            <Image src={kwRealty} alt="reshilow realty" className="w-[400px]  h-[100px]" />
            <Image src={compass} alt="reshilow realty" className="w-[400px]  h-[100px]" />
            <Image src={coldwellBanker} alt="reshilow realty" className="w-[400px]  h-[100px]" />
            <Image src={reMax} alt="reshilow realty" className="w-[400px]  h-[100px]" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicesPage;
