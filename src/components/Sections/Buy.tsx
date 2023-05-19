import Image from 'next/image';
import {FC, memo} from 'react';
import title from '../../images/title.png';
import wallet from '../../images/wallet.png';
import uniswap from '../../images/uniswap.png';
import eth from '../../images/eth.png';
import exchange from '../../images/exchange.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Buy: FC = memo(() => {
  return (
    <Section className="relative w-full py-20 pt-20" sectionId={SectionId.Buy} noPadding line>
      <h3 className="fanco mt-20 flex items-end justify-center text-3xl leading-10 text-gray-700 lg:text-5xl">
        <Image alt="" src={title} className="w-24" /> <span>How to buy</span>
      </h3>
      <div className="mt-20 px-5 lg:px-20">
        <div>
          <div className="mb-16 flex flex-col  rounded-xl border-2 border-gray-800 bg-[#fff] px-5 py-10 text-center shadow-xl lg:flex-row lg:px-16 lg:text-left">
            <div className="flex items-center justify-center lg:mr-20">
              <Image alt="" src={wallet} className="w-32 lg:w-44" />
            </div>
            <div className="flex-1">
              <h3 className="fanco text-2xl text-gray-600  lg:text-3xl">Create a Wallet</h3>
              <p className=" montserrat mt-5 break-words  text-xl tracking-wide  text-gray-900 lg:text-2xl lg:leading-12">
                Download Metamask or your wallet of choice from the app store or google play store for free. For desktop
                users, download the google chrome extension by going to metamask.io.
              </p>
            </div>
          </div>
          <div className="mb-16 flex flex-col  rounded-xl border-2 border-gray-800 bg-[#fff] px-5 py-10 text-center shadow-xl lg:flex-row lg:px-16 lg:text-left">
            <div className="flex items-center justify-center lg:mr-20">
              <Image alt="" src={eth} className="w-32 lg:w-44" />
            </div>
            <div className="flex-1">
              <h3 className="fanco text-2xl text-gray-600  lg:text-3xl">Get Some ETH</h3>
              <p className=" montserrat mt-5 break-words  text-xl tracking-wide  text-gray-900 lg:text-2xl lg:leading-12">
                Have ETH in your wallet to switch to $Joyhop. If you don’t have any ETH, you can buy directly on
                metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
              </p>
            </div>
          </div>
          <div className="mb-16 flex flex-col  rounded-xl border-2 border-gray-800 bg-[#fff] px-5 py-10 text-center shadow-xl lg:flex-row lg:px-16 lg:text-left">
            <div className="flex items-center justify-center lg:mr-20">
              <Image alt="" src={uniswap} className="w-32 lg:w-44" />
            </div>
            <div className="flex-1">
              <h3 className="fanco text-2xl text-gray-600  lg:text-3xl">Go to Uniswap</h3>
              <p className=" montserrat mt-5 break-words  text-xl tracking-wide  text-gray-900 lg:text-2xl lg:leading-12">
                Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app.
                Connect your wallet. Paste the $Joyhop token address into Uniswap, select Joyhop, and confirm. When
                Metamask prompts you for a wallet signature, sign.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl  border-2 border-gray-800 bg-[#fff] px-5 py-10 text-center shadow-xl lg:flex-row lg:px-16 lg:text-left">
            <div className="flex items-center justify-center lg:mr-20">
              <Image alt="" src={exchange} className="w-32 lg:w-44" />
            </div>
            <div className="flex-1">
              <h3 className="fanco text-2xl text-gray-600  lg:text-3xl">Switch ETH for $Joyhop</h3>
              <p className=" montserrat mt-5 break-words  text-xl tracking-wide  text-gray-900 lg:text-2xl lg:leading-12">
                Switch ETH for $Joyhop. We have ZERO taxes so you don’t need to worry about buying with a specific
                slippage, although you may need to use slippage during times of market volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Buy.displayName = 'Buy';
export default Buy;
