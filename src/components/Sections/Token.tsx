// import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Token: FC = memo(() => {
  return (
    <Section className="" sectionId={SectionId.Token}>
      token
    </Section>
  );
});

Token.displayName = 'About';
export default Token;
