import React from "react";
import Head from "next/head";

/************ Import components **********************************/
import Banner from "../components/Banner";
import HomePage from "./HomePage";



const index = () => {
  return (
    <div className="container-fluid pe-0 p-0">
          <Head>
        <title>
        StaffQ - Consulting | HR services | Process Transformation
        </title>
        <meta property="og:image" content="https://www.staffq.in/assets/images/Frame.png"/>
        <meta name="linkedin:image" content="https://www.staffq.in/assets/images/Frame.png"/>
        <meta name="twitter:image" content="https://www.staffq.in/assets/images/Frame.png" />
        <meta name="instagram:image" content="https://www.staffq.in/assets/images/Frame.png"/>
        <meta
          name="title"
          content=" StaffQ Consultants: Top Recruitment Services Company in India"
        />
        <meta
          name="description"
          content="We are leading staffing company that we provide you with the best workforce management solutions. We offer staffing services to top companies across a variety 
          of industries, and our team of experts can help you find the right solution for your business. ."
        />
        <meta
          name="keywords"
          content="  StaffQ - Consulting | HR services | Process Transformation"
        />

        <link rel="canonical" href="https://www.staffq.in/" />

        <link
          rel="alternate"
          href="https://www.staffq.in/"
          hreflang="en-in"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="We are leading staffing company that we provide you with the best workforce management solutions.
           We offer staffing services to top companies across a variety of industries, and our team of experts can help you find the right solution for your business. "
        />
        <meta
          property="og:description"
          content="We are leading staffing company that we provide you with the best workforce management solutions. We offer staffing services to top companies
           across a variety of industries, and our team of experts can help you find the right solution for your business. ."
        />
        <meta
          property="og:image"
          content="https://www.staffq.in/assets/images/index-og.webp"
        />
        <meta property="og:url" content="https://www.staffq.in" />
        <meta property="og:site_name" content="StaffQ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />




      </Head>
      <Banner />
      <HomePage/>
    
    </div>
  );
};

export default index;
