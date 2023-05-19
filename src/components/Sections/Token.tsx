import Image from 'next/image';
import {FC, memo} from 'react';
import title from '../../images/title.png';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import pie from '../../images/ball.png';
import fly from '../../images/fly.png';

const Token: FC = memo(() => {
  return (
    <Section className="w-full px-10 py-20 lg:px-20" noPadding sectionId={SectionId.Token} line>
      <h3 className="fanco mt-20 flex items-end justify-center text-3xl leading-10 text-gray-700 lg:text-5xl">
        <Image alt="" src={title} className="w-24" /> <span>tokenomics</span>
      </h3>
      <h3 className=" montserrat mt-8 flex items-end justify-center text-center text-xl font-semibold leading-10 text-gray-200 lg:text-3xl">
        Total Supply: 1,000,000,000 JOYHOP
      </h3>
      <div className="flex w-full flex-col items-center justify-center lg:mt-10 lg:flex-row">
        <ul className="flex-2">
          <li className=" montserrat mt-10 break-words  text-xl tracking-wide  text-gray-900 lg:text-2xl lg:leading-12">
            Initial Liquidity: <span className="text-orange-500">92.8%</span> of the total supply is allocated to the
            liquidity pool.
          </li>
          <li className=" montserrat mt-10 break-words  text-xl  tracking-wide  text-gray-900 lg:text-2xl lg:leading-12">
            Reserved Supply: <span className="text-orange-500">7.2%</span> of the token supply is held in a
            multi-signature wallet for future centralized exchange listings, bridges, and liquidity pools.
          </li>
        </ul>
        <div className="relative mt-10 flex flex-3 flex-col lg:mt-0 lg:items-center lg:justify-center">
          <p className=" montserrat text-md lg:text-md font-semibold  tracking-wide text-[#f64444] lg:leading-10">
            Initial Liquidity:92.8%
          </p>
          <Image alt="" src={pie} className="w-full lg:w-120" />

          <p className=" montserrat text-md lg:text-md font-semibold tracking-wide text-[#f64444] lg:leading-10">
            Reserved Supply:7.2%
          </p>
          <Image alt="" src={fly} className="absolute right-0 top-0 w-20 lg:bottom-0 lg:w-44" />
        </div>
      </div>
    </Section>
  );
});

Token.displayName = 'Token';
export default Token;
