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
        StaffQ Consultants
        </title>
        <meta property="og:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="linkedin:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="twitter:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="instagram:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
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
          content="StaffQ Consultants"
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
          content="https://www.applogiq.org/assets/images/index-og.webp"
        />
        <meta property="og:url" content="https://www.staffq.in" />
        <meta property="og:site_name" content="AppLogiQ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AppLogiQ",
              "image": "https://www.applogiq.org/assets/images/logo.gif",
              "@id": "",
              "url": "https://applogiq.org/",
              "telephone": "9629938033",
              "priceRange": "$$$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Floor-3,Sathyam Towers,6D Bharathi Street,Valipalayam.",
                "addressLocality": "Tiruppur",
                "postalCode": "641 601",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.10601020,
                "longitude": 77.34961810
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/applogiq/",
                "https://www.facebook.com/Applogiq",
                "https://www.instagram.com/applogiq/"
              ] 
            }`
          }}
        />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Applogiq",
              "alternateName": "software company",
              "url": "https://www.applogiq.org/",
              "logo": "https://www.applogiq.org/assets/images/logo.gif",
              "sameAs": [
                "https://www.facebook.com/Applogiq",
                "https://www.linkedin.com/company/applogiq/"
              ]
            }`
          }}
        /> */}


      </Head>
      <Banner />
      <HomePage/>
    
    </div>
  );
};

export default index;
