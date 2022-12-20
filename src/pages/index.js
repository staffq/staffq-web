import React from "react";
import Head from "next/head";

/************ Import components **********************************/
import Banner from "../components/Banner";
import HomePage from "./HomePage";

// import { useRouter } from 'next/router';

const index = () => {
  // const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  // React.useEffect(() => {
  //     const handleStart = () => { setPageLoading(true); };
  //     const handleComplete = () => { setPageLoading(false); };

  //     router.events.on('routeChangeStart', handleStart);
  //     router.events.on('routeChangeComplete', handleComplete);
  //     router.events.on('routeChangeError', handleComplete);
  //   }, [router]);

  return (
    <div className="container-fluid pe-0 p-0">
      <Head>
        <title>
          StaffQ - Consulting | HR services | Process Transformation
        </title>
        <meta
          property="og:image"
          content="https://www.staffq.in/assets/images/Frame.png"
        />
        <meta
          name="linkedin:image"
          content="https://www.staffq.in/assets/images/Frame.png"
        />
        <meta
          name="twitter:image"
          content="https://www.staffq.in/assets/images/Frame.png"
        />
        <meta
          name="instagram:image"
          content="https://www.staffq.in/assets/images/Frame.png"
        />
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

        <link rel="alternate" href="https://www.staffq.in/" hreflang="en-in" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="We simplify the way to find and manage workforce."
        />
        <meta
          property="og:description"
          content="We simplify the way to find and manage workforce."
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
        {/* <div>
        <script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "Organization",
  "name": "StaffQ",
  "alternateName": "staffing company",
    "description": "We are leading staffing company that we provide you with the best workforce management solutions. We offer staffing services to top companies across a variety of industries, and our team of experts can help you find the right solution for your business",
  "url" : "https://www.staffq.in",
  "logo" : "https://www.staffq.in/assets/images/staffq.svg",
  "image" : "https://www.staffq.in/assets/images/Main-banner-image-grp.webp",
  "telephone": " (91) 96296-67621",
  "priceRange": " Free Consultation",
  "openingHours" : "Mo-Fri 09:00-18:00",
  "address":
    {
      "@type": "PostalAddress",
      "streetAddress": "Floor-3,Sathyam Towers,6D Bharathi Street,Valipalayam",
      "addressLocality": "Tamilnadu",
      "addressRegion": "IND",
      "postalCode": "641601",
      "addressCountry": "IND"
    },
  "sameAs":[
  "https://www.linkedin.com/company/staffq/",
  "https://www.instagram.com/staffq_consulting/",
  "https://www.facebook.com/people/StaffQ/100088556320332/"
  ]
}
</script>

        </div> */}
      </Head>
      <Banner />
      <HomePage />
    </div>
  );
};

export default index;
