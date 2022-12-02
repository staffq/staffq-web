import React from "react";
import Head from "next/head.js";
import {
  ContacttStyle,
  Form,
  Second,
  SmallContact,
} from "../../styles/contact-style.js";


// import Input from "../../components/FormControls/Input/index.jsx";
const contact = () => {
  return (
    <div>
      <Head>
        <title>
        Contact Us 
        </title>
        <meta property="og:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="linkedin:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="twitter:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta name="instagram:image" content="https://www.applogiq.org/assets/images/metaimg.png" />
        <meta
          name="title"
          content="We partner with employers across the globe to provide talent solutions while creating
           significant opportunities for job seekers. We are dedicated to matching the right person with the right job."
        />
        <meta
          name="description"
          content="We partner with employers across the globe to provide talent solutions while creating significant opportunities for job seekers.
           We are dedicated to matching the right person with the right job.."
        />
        <meta
          name="keywords"
          content="Contact Us  "
        />

        <link rel="canonical" href="https://www.staffq.in/contact-us/" />

        <link
          rel="alternate"
          href="https://www.staffq.in/"
          hreflang="en-in"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="We partner with employers across the globe to provide talent solutions while creating significant opportunities 
          for job seekers.
           We are dedicated to matching the right person with the right job."
        />
        <meta
          property="og:description"
          content="We partner with employers across the globe to provide talent solutions while creating significant 
          opportunities for job seekers. We are dedicated to matching the right person with the right job. ."
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
      <ContacttStyle>
        <Second>
          <div>
            <div className="container-fluid p-0">
              <div className="let-one">
                <div className="container text-center pt-5 p-5">
                  <h1 className="lets-connect">
                    Let’s Connect For Your Growth
                  </h1>
                  <p className="pt-2 p-tag">
                    We appreciate your interest in our services. Please leave us
                    few details about your business requirements to help us
                    serve better. This information will help us to route your
                    request to the concerned person and you would hear from us
                    promptly.
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* ........................form section.............................. */}
          {/* <Form>
            <div>
              <div className="container">
                <div className="text-center mt-5">
                  <h4>Let’s Talk</h4>
                  <p>FIll out this form and we’ll get back to you.</p>
                </div>
                <div className=" ">
                  <div className="row mt-2">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                      <div></div>
                      <div className="form-group ">
                        <label for="exampleInputPassword1">Name*</label>
                        <Input placeholder="Name" />
                      </div>
                      <div className="form-group ">
                        <label for="exampleInputPassword1">Phone*</label>
                        <Input placeholder="98765-43210" />
                      </div>
                      <div className="form-group ">
                        <label for="exampleInputPassword1">State*</label>
                        <div>
                          <select className="input-option">
                            <option value="">State</option>
                            <option value="">TamilNadu</option>
                            <option value="">Kerala</option>
                          </select>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12">
                      <div className="form-group ">
                        <label for="exampleInputPassword1">
                          Email Address*
                        </label>

                        <Input placeholder="Eg: Johnkrisinski@email.com " />
                      </div>
                      <div className="form-group ">
                        <label for="exampleInputPassword1">Country*</label>
                        <div>
                          <select className="input-option ">
                            <option value="country*">Country</option>
                            <option value="">India</option>
                            <option value="">US</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group ">
                        <label for="exampleInputPassword1">City*</label>

                        <Input placeholder="City" />
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                  </div>
                </div>

                ...............................text--filed..................
                <div className="">
                  <div className="row ">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 col-sm-12 col-sm-12">
                      <div className="form-group ">
                        <label for="exampleInputPassword1">
                          Your Requirement*
                        </label>
                        <input type="textarea" className="form-control text" />
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                  </div>
                  <div className="submit-btn mt-5">
                    <button className="btn button-submit submit-btn ">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </Form> */}

          <div style={{}} className="pc-contact">
            <div className="container">
              <h2 className="Our-Branches">Our Branches</h2>
              <div className="row  roww">
                <div className="col-lg-4 col-sm-12 col-md-6">
                  <div>
                    <div className="display">
                      <div>
                        <img
                          src="assets/images/india.png"
                          className="map-image"
                          alt="img"
                        />
                      </div>
                      <div className="display-two">
                        <span className="h-one">India</span>
                  
                        <span className="h-one">Tiruppur</span>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Loaction.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      Floor-3A,Sathyam Towers,6D <br></br> Bharathi
                      Street,Valipalayam,<br></br>
                      Tiruppur, 641 601
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/phone-icon.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      +91 9629938033<br></br>
                      +91 421 3552738
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Email-icon.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      info@staffq.in
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-6 res-one">
                  <div>
                    <div className="display">
                      <div>
                        <img
                          src="assets/images/canada.png"
                          className="map-image"
                          alt="img"
                        />
                      </div>
                      <div className="display-two">
                        <span className="h-one">Canada</span>
                        <span className="h-one">Ontario</span>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Loaction.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      111302, Granrock Crea,<br></br> Mississauaga Ontario{" "}
                      <br></br> L5V OEI
                    </div>
                  </div>
                  {/* <div className="row mt-3">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/phone-icon.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      +91 9629938033<br></br>
                      +91 421 3552738
                    </div>
                  </div> */}

                  <div className="row mt-4">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Email-icon.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      info@staffq.in
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-6 res-two">
                  <div>
                    <div className="display">
                      <div>
                        <img
                          src="assets/images/united.png"
                          className="map-image"
                          alt="img"
                        />
                      </div>
                      <div className="display-two">
                        <span className="h-one">United Kingdom</span>
                        <span className="h-one">Southampton</span>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Loaction.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 font">
                      127, OMDURMAN ROAD, <br></br>Southampton <br></br> S014
                      7DW
                    </div>
                  </div>
                  {/* <div className="row mt-3">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/phone-icon.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      +91 9629938033<br></br>
                      +91 421 3552738
                    </div>
                  </div> */}

                  <div className="row mt-4">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                      <img src="assets/images/Email-icon.svg" alt="img" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11  font">
                      info@staffq.in
                    </div>
                  </div>
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
          </div>

          {/* Small contact section....... */}
          <div className="container small">
            <div className="small-contact">
              <p className="Our-Branches">Our Branches</p>
              <section>
                <div className="container">
                  <div>
                    <div className="">
                      <div className="text-center">
                        
                              <img
                              src="assets/images/india.png"
                              className="map-image"
                              alt="img"
                            />
                      
                   
                      <div className="">
                        <p className="h-one">India</p>
                        <p className="h-one">Tiruppur</p>
                      </div>
                      </div>
                    </div>
                    <div className="one-two mt-2">
                      <div className=" d-fx">
                        <div className="">
                          <img src="assets/images/Loaction.svg" alt="img" />
                        </div>
                        <div className=" font d-one d-two ">
                          Floor-3A,Sathyam Towers,6D <br></br> Bharathi
                          Street,Valipalayam,<br></br>
                          Tiruppur, 641 601
                        </div>
                      </div>
                      <div className=" d-fleex mt-3">
                        <div className="">
                          <img src="assets/images/phone-icon.svg" alt="img" />
                        </div>
                        <div className=" font d-one  ">
                          +91 9629938033<br></br>
                          +91 421 3552738
                        </div>
                      </div>
                      <div className=" d-fleex mt-3">
                        <div className="">
                          <img src="assets/images/Email-icon.svg" alt="img" />
                        </div>
                        <div className=" font d-one ">info@staffq.in</div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="container">
                  <div>
                    <div className="text-center">
                      <div>
                        <img
                          src="assets/images/canada.png"
                          className="map-image"
                          alt="img"
                        />
                      </div>
                      <div className="">
                        <p className="h-one">Canada</p>
                        <p className="h-one">Ontario</p>
                      </div>
                    </div>
                    <div className=" d-fx ">
                      <div className="">
                        <img src="assets/images/Loaction.svg" alt="img" />
                      </div>
                      <div className=" font d-one  ">
                        111302, Granrock Crea,<br></br> Mississauaga Ontario{" "}
                        <br></br> L5V OEI
                      </div>
                    </div>
                    <div className=" d-fleex mt-3">
                      <div className="">
                        <img src="assets/images/phone-icon.svg" alt="img" />
                      </div>
                      <div className=" font d-one  ">
                        +91 9629938033<br></br>
                        +91 421 3552738
                      </div>
                    </div>
                    <div className=" d-fleex mt-3">
                      <div className="">
                        <img src="assets/images/Email-icon.svg" alt="img" />
                      </div>
                      <div className=" font d-one ">info@staffq.in</div>
                    </div>

                    <div></div>
                  </div>
                </div>

                <div className="container">
                  <div>
                    <div className="text-center">
                      <div>
                        <img
                          src="assets/images/united.png"
                          className="map-image"
                          alt="img"
                        />
                      </div>
                      <div className="">
                        <p className="h-one">United Kingdom</p>
                        <p className="h-one">Southampton</p>
                      </div>
                    </div>
                    <div className=" d-fx mt-2 ">
                      <div className="">
                        <img src="assets/images/Loaction.svg" alt="img" />
                      </div>
                      <div className=" font d-one ">
                        127, OMDURMAN ROAD, <br></br>Southampton S014 7DW
                      </div>
                      <br></br>
                    </div>
                    {/* <div className=" d-fleex mt-3">
                      <div className="">
                        <img src="assets/images/phone-icon.svg" alt="img" />
                      </div>
                      <div className=" font d-one  ">
                        +91 9629938033<br></br>
                        +91 421 3552738
                      </div>
                    </div> */}
                    <div className=" d-fleex mt-3">
                      <div className="">
                        <img src="assets/images/Email-icon.svg" alt="img" />
                      </div>
                      <div className=" font d-one ">info@staffq.in</div>
                    </div>

                    <div></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Second>
      </ContacttStyle>

      {/* <SmallContact>
      

      </SmallContact> */}
    </div>
  );
};

export default contact;
