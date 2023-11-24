import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import { fetchAPI } from "@/utils/fetchApI";

const ServicesDetails = ({ service: { data },serviceSlider }) => {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>{data[0].attributes.title}</h2>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>{data[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <ServicesDetailsContent {...data[0]} />

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider data={serviceSlider}/>
      </div>

      <CTO />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  
  const {data} = await fetchAPI(`/services`);
  // console.log(data);
  const paths = data.map((service) => ({
    params: { slug: service.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library

  const service  =  await fetchAPI(`/services?filters[slug][$eq]=${params.slug}&populate=*`)
  const serviceSlider  =  await fetchAPI("/services?populate=*");
  // By returning { props: { service } }, the Blog component
  // will receive `service` as a prop at build time
  return {
    props: {
      service,
      serviceSlider:serviceSlider.data
    },
  };
}

export default ServicesDetails;
