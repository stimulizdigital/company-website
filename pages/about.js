import React from "react";
import Link from 'next/link';
import NavbarTwo from "@/components/Layout/NavbarTwo";
import WhoWeAre from "@/components/About/WhoWeAre";
import Partners from "@/components/Common/Partners";
import OurGoal from "@/components/About/OurGoal";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import Skills from "@/components/Common/Skills";
import PricingTable from "@/components/Pricing/PricingTable";
import ContactForm from "@/components/Common/ContactForm";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layout/Footer";
import { fetchAPI } from "@/utils/fetchApI";



export default function About({logo,footer,whoWeAre,ourGoals,whyChooseUs,skills,contact_form,articles}) {
  return <>
    <NavbarTwo />

    <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/page-banner/banner-bg.jpg` }}>
      <div className="container">
        <div
          className="page-banner-content"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <h2>About us</h2>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>

    <WhoWeAre data={whoWeAre} />

    {/* <Partners /> */}

    <OurGoal data={ourGoals}/>

    <div className="bg-with-F5F5F5-color">
      <WhyChooseUs  data={whyChooseUs}/>
    </div>

    <Skills data={skills}/>

    {/* <PricingTable /> */}

    <ContactForm  data={contact_form}/>

    <Article data={articles}/>

    <Footer logo={logo} footer={footer} />
  </>;
}


export async function getStaticProps() {
  const logo =  await fetchAPI("/site-logo?populate=*");
  const footer_content  =  await fetchAPI("/footer?populate=*");
  const who_we_are =  await fetchAPI("/about-who-we-are?populate=*");
  const about_our_goals =  await fetchAPI("/about-our-goal?populate=*");
  const why_choose_us =  await fetchAPI("/why-choose-us?populate=reason.image");
  const skills  =  await fetchAPI("/skill?populate=*");
  const contact_form  =  await fetchAPI("/contact-form?populate=*");
  const articles =  await  fetchAPI("/blogs?populate=*");


  return {
    props:{
      logo:logo.data,
      footer:footer_content.data,
      whoWeAre:who_we_are.data,
      ourGoals:about_our_goals.data,
      whyChooseUs:why_choose_us.data,
      skills:skills.data,
      contact_form:contact_form.data,
      articles:articles.data
    },
    revalidate: 10 
  }

}