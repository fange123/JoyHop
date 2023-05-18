// import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="" sectionId={SectionId.About}>
      about
    </Section>
  );
});

About.displayName = 'About';
export default About;
