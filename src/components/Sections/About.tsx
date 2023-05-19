import Image from 'next/image';
import {FC, memo} from 'react';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import title from '../../images/title.png';

const About: FC = memo(() => {
  return (
    <Section className="f-full relative lg:px-20" sectionId={SectionId.About}>
      <div className="mt-20 text-center">
        <h3 className="fanco flex items-end justify-center text-3xl leading-10 text-gray-700 lg:text-5xl">
          <Image alt="" src={title} className="w-24" /> <span>About</span>
        </h3>
        <p className=" montserrat mt-10 break-words  text-xl font-semibold tracking-wide  text-gray-600 lg:text-2xl lg:leading-12">
          JoyHop is an addictive digital currency that's like a wild party setting your wallet on fire! We're not just a
          simple cryptocurrency, JoyHop is a symbol of a lifestyle! Our goal is to merge joy and finance, allowing you
          to experience unprecedented entertainment while investing.
        </p>
        <p className=" montserrat mt-10 break-words text-xl font-semibold tracking-wide  text-gray-600  lg:text-2xl lg:leading-12">
          The market volatility of JoyHop is like a heart-pounding roller coaster ride, where you can never predict what
          will happen in the next second. But it's this uncertainty that makes every trade exciting and exhilarating.
          You'll become an investment adventurer, exploring untapped wealth potential!
        </p>
        <div></div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
