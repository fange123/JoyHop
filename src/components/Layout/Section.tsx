import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';
import lineImg from '../../images/line.png';
import {SectionId} from '../../data/data';
import Image from 'next/image';

const Section: FC<
  PropsWithChildren<{
    sectionId: SectionId;
    sectionTitle?: string;
    noPadding?: boolean;
    className?: string;
    line?: boolean;
  }>
> = memo(({children, sectionId, noPadding = false, className, line = false}) => {
  return (
    <div className="relative w-full">
      <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} id={sectionId}>
        <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
      </section>
      {line && (
        <div className="top absolute mt-10 w-full">
          <Image alt="" src={lineImg} className="h-14 w-full" />
        </div>
      )}
    </div>
  );
});

Section.displayName = 'Section';
export default Section;
