// import Image from 'next/image';
import {FC, memo} from 'react';
import homeImg from '../../images/img1.png';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Image from 'next/image';
import icon1 from '../../images/icon1.webp';
import icon2 from '../../images/icon2.webp';
import icon3 from '../../images/icon3.webp';
import icon4 from '../../images/icon4.webp';
import icon5 from '../../images/icon5.webp';
import icon6 from '../../images/icon6.webp';
import p1 from '../../images/p1.webp';

import p2 from '../../images/p2.webp';
import p3 from '../../images/p3.webp';
import p4 from '../../images/p4.webp';
import p5 from '../../images/p5.webp';
import p6 from '../../images/p6.webp';
import p7 from '../../images/p7.webp';
import p8 from '../../images/p8.webp';
import p9 from '../../images/p9.webp';

import logo from '../../images/logo_bg.png';
import Link from 'next/link';
import IconButton from '../../components/Icon/IconButton';

const Hero: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Hero} className="w-full px-5 pt-20 lg:px-20 lg:pt-36" line>
      <div className="relative flex h-full w-full flex-col-reverse  justify-around lg:flex-row">
        <div className="mt-5 lg:mt-0 lg:flex-1">
          <Image alt="" src={homeImg} />
        </div>
        <div className=" flex w-full flex-col items-center justify-center lg:mt-20 lg:flex-1">
          <h3 className="fanco mt-10 flex items-center text-2xl font-semibold text-gray-700 lg:w-full lg:text-4xl">
            JoyHop <Image alt="" src={logo} className="w-40" />
          </h3>
          <p className="montserrat mt-5 break-words text-center text-xl font-semibold text-gray-600 lg:mt-10  lg:text-left lg:text-2xl lg:leading-12">
            I'm JoyHop, the memecoin from the future! I'm here to bring you insane joy and endless fun!
          </p>
          <p className="montserrat mt-3 break-words text-center  text-xl font-semibold text-gray-600  lg:text-left lg:text-2xl lg:leading-12">
            We believe that in the world of JoyHop, everyone can find happiness and success. We're not just a digital
            currency, we're a community, a united collective that motivates and supports each other. Join us and indulge
            in our explosive social activities, games, raffles, and grand parties with JoyHoppers worldwide!
          </p>
        </div>
      </div>
      <div className=" mt-20 grid w-full grid-cols-3 place-items-center gap-5 lg:flex lg:flex-wrap lg:justify-center">
        <Link href="">
          <Image
            alt=""
            src={icon1}
            className="w-full transition duration-500 ease-linear hover:scale-110 lg:h-32 lg:w-32"
          />
        </Link>
        <Link href="">
          <Image
            alt=""
            src={icon2}
            className=" w-full transition duration-500 ease-linear hover:scale-110 lg:h-32 lg:w-32"
          />
        </Link>
        <Link href="">
          <Image
            alt=""
            src={icon3}
            className=" w-full transition duration-500 ease-linear hover:scale-110 lg:h-32 lg:w-32"
          />
        </Link>
        <Link href="">
          <Image
            alt=""
            src={icon4}
            className=" w-full transition duration-500 ease-linear hover:scale-110 lg:h-32 lg:w-32"
          />
        </Link>
        <Link href="">
          <Image
            alt=""
            src={icon5}
            className=" w-full transition duration-500 ease-linear hover:scale-110 lg:h-32 lg:w-32"
          />
        </Link>
        <Link href="">
          <Image
            alt=""
            src={icon6}
            className="translate w-full transition duration-500 ease-linear hover:scale-110 lg:h-32 lg:w-32"
          />
        </Link>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center pt-20 lg:grid lg:grid-cols-4  lg:place-items-center lg:gap-4 lg:px-20">
        <IconButton icon={p1}>gemini</IconButton>
        <IconButton icon={p2}>binance</IconButton>
        <IconButton icon={p3}>kucoin</IconButton>
        <IconButton icon={p4}>huobi</IconButton>
        <IconButton icon={p5}>bybit</IconButton>
        <IconButton icon={p6}>crypto.com</IconButton>
        <IconButton icon={p7}>bitget</IconButton>
        <IconButton icon={p8}>okx</IconButton>
        <IconButton icon={p9}>japan</IconButton>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
