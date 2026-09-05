import React from 'react';
import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import BottomSection from './BottomSection';

function Universe() {
  return ( 
    <>
      <Hero/>
      <LeftSection
        imageUrl="media/images/kite.png"
        LearnMore=""
        tryDemo=""
        googlePlay=""
        appStore=""
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkMore=""
        
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        LearnMore=""
        tryDemo=""
        googlePlay=""
        appStore=""
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      />
      <RightSection
      imageUrl="media/images/kiteconnect.png"
      productName="Kite Connect API"
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      linkMore=""
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        LearnMore=""
        tryDemo=""
        googlePlay=""
        appStore=""
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <BottomSection/>
      
    </>
   );
}

export default Universe;
