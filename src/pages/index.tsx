import dynamic from 'next/dynamic';
import {FC, memo} from 'react';
import Image from 'next/image';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Buy from '../components/Sections/Buy';
import Token from '../components/Sections/Token';
import Roadmap from '../components/Sections/Roadmap';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import {homePageMeta} from '../data/data';
import bg from '../images/bg1.png';


// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    // @ts-ignore
    <Page description={description} title={title}>
      <div className="h-full w-full bg-[#94d8da]">
        {/* @ts-ignore */}
        <Header />
        <Hero />
        <div>
          <Image alt="" src={bg} className="absolute right-0 z-0 opacity-30" />
        </div>
        <About />
        <Buy />
        <Token />
        <Roadmap />
        <Footer />
      </div>
    </Page>
  );
});

export default Home;
