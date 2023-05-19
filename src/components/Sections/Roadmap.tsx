import Image from 'next/image';
import title from '../../images/title.png';
import {FC, memo} from 'react';
import roadmap from '../../images/roadmap.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Roadmap: FC = memo(() => {
  return (
    <Section className="w-full px-5 pb-20 pt-20 lg:px-20" sectionId={SectionId.Roadmap} noPadding>
      <h3 className="fanco mt-20 flex items-end justify-center text-3xl leading-10 text-gray-700  lg:text-5xl">
        <Image alt="" src={title} className="w-24" /> <span>roadmap</span>
      </h3>
      <div className="flex-full flex flex-col items-center justify-between lg:mt-10">
        <div className="flex flex-col items-center  lg:flex-row">
          <Image alt="" src={roadmap} className="flex-1" />
          <div className=" montserrat flex-1 break-words text-xl tracking-wide text-gray-900  lg:leading-8">
            Please note that this is a simplified roadmap and the actual implementation and timeline may be subject to
            change based on market conditions and community needs.
          </div>
        </div>
        <div className="mt-10 w-full lg:mt-0 lg:flex">
          <div className="mb-10 flex w-full flex-col items-center rounded-r-xl border border-gray-600 bg-[#fff] py-6 shadow-xl lg:mr-10 lg:px-10">
            <h3 className="fanco mb-5 text-center text-2xl text-gray-600  lg:mt-5  lg:text-3xl">Phase 1</h3>
            <ul className="flex-1 flex-col px-10 lg:px-0">
              <li className=" montserrat mb-3 list-disc items-center justify-between break-words text-xl tracking-wide text-gray-900  lg:leading-8">
                Launch of Joyhop token
              </li>
              <li className=" montserrat  mb-3 list-disc  break-words text-xl tracking-wide text-gray-900  lg:leading-8">
                Listing on CoinMarketCap and CoinGecko
              </li>
              <li className=" montserrat list-disc  break-words text-xl  tracking-wide text-gray-900  lg:leading-8">
                Initiate marketing campaigns
              </li>
            </ul>
          </div>
          <div className="mb-10 flex w-full flex-col items-center rounded-r-xl border border-gray-600 bg-[#fff] py-6  shadow-xl lg:mr-10 lg:px-10">
            <h3 className="fanco mb-5 text-center text-2xl text-gray-600  lg:mt-5  lg:text-3xl">Phase 3</h3>
            <ul className="flex-1 flex-col px-10 lg:px-0">
              <li className=" montserrat mb-3 list-disc items-center justify-between break-words text-xl tracking-wide text-gray-900 lg:leading-8">
                Explore strategic partnerships
              </li>
              <li className=" montserrat mb-3 list-disc  break-words text-xl tracking-wide text-gray-900 lg:leading-8">
                Develop and launch
              </li>
              <li className=" montserrat list-disc  break-words text-xl  tracking-wide text-gray-900 lg:leading-8">
                Expand global presence
              </li>
            </ul>
          </div>
          <div className="mb-10 flex w-full flex-col items-center rounded-r-xl border border-gray-600 bg-[#fff] py-6 shadow-xl lg:px-10">
            <h3 className="fanco mb-5 text-center text-2xl text-gray-600  lg:mt-5  lg:text-3xl">Phase 4</h3>
            <ul className="flex-1 flex-col px-10 lg:px-0">
              <li className=" montserrat mb-3 list-disc items-center justify-between break-words text-xl  tracking-wide text-gray-900 lg:leading-8">
                Continual development and improvement
              </li>
              <li className=" montserrat  mb-3 list-disc  break-words text-xl tracking-wide text-gray-900 lg:leading-8">
                Explore real-world use cases and partnerships
              </li>
              <li className=" montserrat list-disc  break-words text-xl  tracking-wide text-gray-900 lg:leading-8">
                Foster a vibrant and active community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
});

Roadmap.displayName = 'Roadmap';
export default Roadmap;
