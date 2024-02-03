import { narLogo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className={`w-full`}>
      {footerLinks.map((footerlink) => (
        <ul
          key={footerlink.title}
          className="flex flex-col w-full mb-4 md:flex-row md:justify-between"
        >
          {footerlink.links.map((link, index) => {
            if (!link.href) {
              return (
                <li
                  key={link.name}
                  className={`font-ubuntu font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary ${
                    index !== footerlink.links.length - 1 ? 'mb-2 md:mb-0 md:mr-4' : 'md:mb-0'
                  }`}
                >
                  <div>{link.name}</div>
                  <div className="text-sm mt-2 text-gray-300">{link.email}</div>
                </li>
              );
            }

            const target = link.href.startsWith('/') ? '_self' : '_blank';

            return (
              <li
                key={link.name}
                className={`font-ubuntu font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary ${
                  index !== footerlink.links.length - 1 ? 'mb-2 md:mb-0 md:mr-4' : 'md:mb-0'
                }`}
              >
                <a href={link.href} target={target}>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      ))}

      <div className="w-full flex flex-col flex-wrap md:flex-row justify-between items-center md:pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-ubuntu font-normal text-center md:text-left text-[18px] leading-[27px] text-white mb-4 md:mb-0">
          Copyright Ⓒ 2024 JubileeInvestments LLC. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-4">
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-4 md:mr-6' : 'mr-0'
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
      <div className="w-full text-xs text-center mt-8 md:mt-8">
        1520 Belle View Blvd Suite #5283 Alexandria, VA 22307
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-sm text-gray-300 text-italic">member of</div>
        <Image src={narLogo} alt="member of nar" className="h-auto" />
      </div>
    </section>
  );
};

export default Footer;
