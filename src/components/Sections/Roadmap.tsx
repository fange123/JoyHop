// import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Roadmap: FC = memo(() => {
  return (
    <Section className="" sectionId={SectionId.Roadmap}>
      Roadmap
    </Section>
  );
});

Roadmap.displayName = 'Roadmap';
export default Roadmap;
