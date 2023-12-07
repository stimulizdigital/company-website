import React from "react";
import Navbar from "@/components/Layout/Navbar";
import HeroSlider from "@/components/HomePageDemo1/HeroSlider";
import Partners from "@/components/Common/Partners";
import WhoWeAre from "@/components/HomePageDemo1/WhoWeAre";
import ServiceSlider from "@/components/Services/ServiceSlider";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import IntroVideo from "@/components/Common/IntroVideo";
import ProjectSlider from "@/components/Projects/ProjectSlider";
import Testimonials from "@/components/Common/Testimonials";
import PricingTable from "@/components/Pricing/PricingTable";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layout/Footer";
import { fetchAPI } from "@/utils/fetchApI";

export default function Home({navBar,heroSlider,whoWeAre,services,chooseUs,logo,footer}) {
  return (
    <>
      <Navbar data={navBar} />

      <HeroSlider data={heroSlider} />

      {/* <Partners /> */}

      <WhoWeAre data={whoWeAre} />

      <ServiceSlider data={services} />

      <WhyChooseUs data={chooseUs}/>

      <div className="mb-minus-100">
        <IntroVideo />
      </div>

      {/* <ProjectSlider /> */}

      {/* <Testimonials /> */}

     {/* <div className="m-2 bor-radius-15">
        <PricingTable className="rounded-4" />
      </div>  */}

{/* <div className="m-2 bor-radius-15">
      <Article />
</div> */}
      <div className="m-2 bor-radius-15">
        <Footer className="rounded-4" logo={logo} footer={footer}/>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const res =  await fetchAPI("/nav-bar",{"populate":"*"});
  const heroData  =  await fetchAPI("/hero-slider-home-1",{"populate":"sliderITem.image"});
  const whoWeAre =  await fetchAPI("/who-we-are",{"populate":"*"});
  const services  = await fetchAPI("/services?populate=*");
  const chooseUs = await fetchAPI("/why-choose-us?populate=reason.image");
  const logo =  await fetchAPI("/site-logo?populate=*");
  const footer_content  =  await fetchAPI("/footer?populate=*");
return {
  props:{
    navBar:res.data,
    heroSlider:heroData.data,
    whoWeAre:whoWeAre.data,
    services:services.data,
    chooseUs:chooseUs.data,
    logo:logo.data,
    footer:footer_content.data,
  },
  revalidate: 10 
}
}