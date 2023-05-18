// import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center"></div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
