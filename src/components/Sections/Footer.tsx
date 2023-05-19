import {FC, memo} from 'react';
import group from '../../images/foot.png';
import Image from 'next/image';
import title from '../../images/title.png';
import contact1 from '../../images/icon1.webp';
import contact2 from '../../images/icon2.webp';
import contact3 from '../../images/icon3.webp';
import contact4 from '../../images/icon5.webp';
import Link from 'next/link';

const Footer: FC = memo(() => (
  <div className="relative bg-gray-700 pb-0  pt-12  sm:pt-14">
    <h3 className="fanco flex items-end justify-center text-3xl leading-10 text-gray-300 lg:text-5xl">
      <Image alt="" src={title} className="w-24" /> <span>Contact</span>
    </h3>
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-2">
        <div className="mt-10 px-5 text-center lg:mt-20 lg:px-20">
          <p className=" montserrat mt-10 break-words  text-xl tracking-wide  text-gray-300 lg:text-2xl lg:leading-12">
            So, are you ready to dive into the embrace of JoyHop? Leave behind the mundane daily grind, unleash your
            inner wildness, and fully enjoy the endless joy brought by JoyHop! Join our family and conquer the pinnacle
            of fun in the digital world!
          </p>
          <p className=" montserrat mt-10 break-words text-xl  tracking-wide  text-gray-300  lg:text-2xl lg:leading-12">
            JoyHop - Where joy meets wealth! Remember, our motto is: Jump with joy, endless gains!
          </p>
          <div className="mt-20 flex items-center justify-center">
            <Link href="">
              <Image alt="" src={contact1} className="mx-5 w-12 lg:w-16" />
            </Link>
            <Link href="">
              <Image alt="" src={contact2} className="mx-5 w-12 lg:w-16" />
            </Link>
            <Link href="">
              <Image alt="" src={contact3} className="mx-5 w-12 lg:w-16" />
            </Link>
            <Link href="">
              <Image alt="" src={contact4} className="mx-5 w-12 lg:w-16" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <Image alt="" src={group} className="mt-14 h-auto w-full" />
      </div>
    </div>

    <div className="mt-10 flex flex-col items-center gap-y-6 bg-gray-900 py-5">
      <span className="text-lg text-neutral-300">© Copyright 2023 Joyhop</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
