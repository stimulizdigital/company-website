import React from "react";
import Link from 'next/link';
import NavbarTwo from "@/components/Layout/NavbarTwo";
import SingleBlogContent from "@/components/Blog/SingleBlogContent";
import Footer from "@/components/Layout/Footer";
import { fetchAPI } from "@/utils/fetchApI";

const BlogDetails = ({ blogs: { data },footer,logo }) => {
  return (
    <>
      <NavbarTwo />

      <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/page-banner/banner-bg-2.jpg` }}>
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

      <SingleBlogContent {...data[0]} />
  
      <Footer logo={logo} footer={footer}/>
    </>
  );
};

export async function getStaticPaths() {
  const blogs  =  await fetchAPI("/blogs");
  console.log(blogs);
  const paths = blogs.data.map((blogs) => ({
    params: { slug: blogs.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const blogs  =  await fetchAPI(`/blogs?filters[slug][$eq]=${params.slug}&populate=*`);
  const logo =  await fetchAPI("/site-logo?populate=*");
  const footer_content  =  await fetchAPI("/footer?populate=*");
  // By returning { props: { blogs } }, the Blog component
  // will receive `blogs` as a prop at build time
  return {
    props: {
        blogs,
        logo:logo.data,
        footer:footer_content.data
    },
  };
}

export default BlogDetails;