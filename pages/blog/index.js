import React from 'react'
import Link from 'next/link'
import NavbarTwo from '@/components/Layout/NavbarTwo'
import BlogGrid from '@/components/Blog/BlogGrid'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layout/Footer'
import { fetchAPI } from "@/utils/fetchApI";



export default function Blog({logo,footer,blogGrid,cto}) {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-2.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Our Blogs</h2>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <BlogGrid data={blogGrid}/>

      <CTO data={cto}/>

      <Footer className="rounded-4" logo={logo} footer={footer}/>
    </>
  )
}




export async function getStaticProps() {
  const logo =  await fetchAPI("/site-logo?populate=*");
  const footer_content  =  await fetchAPI("/footer?populate=*");
  const blogGrid  =  await fetchAPI("/blogs?populate=*");
  const cto = await fetchAPI("/cto?populate=*");
return {
  props:{
    logo:logo.data,
    footer:footer_content.data,
    blogGrid:blogGrid.data,
    cto:cto.data
  }
}
}