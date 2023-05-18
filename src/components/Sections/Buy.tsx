// import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Buy: FC = memo(() => {
  return (
    <Section className="" sectionId={SectionId.Buy}>
      buy
    </Section>
  );
});

Buy.displayName = 'Buy';
export default Buy;
