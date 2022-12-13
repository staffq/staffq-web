import React from "react";
import { Margin, Flex, Fle } from "../../../styles/partner-style";
import { Section, SmallSection } from "../../../styles/partner-style";

const OurPartner = () => {
  return (
    <div>
      <Margin></Margin>
      <Section>
        <p className="text-center" style={{ color: "rgba(8, 20, 41, 0.7)" }}>
          Our partners
        </p>
        <Fle>
          <div className="me-3 PartnerImages ">
            <img
              src="assets/images/Pfizer.png
              "
              style={{ width: "95px" }}
              className="icons-one"
              alt="img"
            />
          </div>
          <div className="me-3 PartnerImage">
            <img
              src="assets/images/cognizant.png"
              className="icons-two"
              style={{ width: "182px" }}
              alt="img"
            />
          </div>
          <div className="me-3 PartnerImage">
            <img
              src="assets/images/Vedhainfo.png"
              className="icons-three"
              style={{ width: "142px" }}
              alt="img"
            />
          </div>
          <div className="me-3 PartnerImage">
            <img
              src="assets/images/Group-440.png"
              className="icons-four"
              style={{ width: "126px" }}
              alt="img"
            />
          </div>
        </Fle>

        <Flex>
          <div>
            <img
              src="assets/images/Protiviti.png"
              className="me-5 PartnerImages-icons-second-one "
              style={{ width: "128px" }}
              alt="img"
            />
          </div>
          <div>
            <img
              src="assets/images/kovai.png"
              className="me-5 PartnerImages-icons-second-two"
              style={{ width: "88px" }}
              alt="img"
            />
          </div>
          <div>
            <img
              src="assets/images/Agilisium.png"
              className="me-5 PartnerImages-icons-second-three "
              style={{ width: "115px" }}
              alt="img"
            />
          </div>
          <div>
            <img
              src="assets/images/Aspire-systems.png"
              alt="img"
              className="me-5 PartnerImages-icons-second-four"
              style={{ width: "120px" }}
            />
          </div>
        </Flex>

        {/* <div className="container">
        <img
              src="assets/images/Pfizer.png
              "
              style={{ width: "95px" }}
              className="icons-one"
              alt="img"
            />
               <img
              src="assets/images/cognizant.png"
              className="icons-two"
              style={{ width: "182px" }}
              alt="img"
            />
      <img
              src="assets/images/Vedhainfo.png"
              className="icons-three"
              style={{ width: "142px" }}
              alt="img"
            />
                <img
              src="assets/images/Group-440.png"
              className="icons-four"
              style={{ width: "126px" }}
              alt="img"/>
                   <img
              src="assets/images/Protiviti.png"
              className="me-5 PartnerImages-icons-second-one "
              style={{ width: "128px" }}
              alt="img"/>
                 <img
              src="assets/images/kovai.png"
              className="me-5 PartnerImages-icons-second-two"
              style={{ width: "88px" }}
              alt="img"
            />
             <img
              src="assets/images/Agilisium.png"
              className="me-5 PartnerImages-icons-second-three "
              style={{ width: "115px" }}
              alt="img"
            />
              <img
              src="assets/images/Aspire-systems.png"
              alt="img"
              className="me-5 PartnerImages-icons-second-four"
              style={{ width: "120px" }}
            />
        </div> */}
      </Section>
      <SmallSection>
        <div className="container">
          <p className="text-center our-partner">Our partners</p>
          <div className="small-one-first logo-one">
            <img src="assets/images/Pfizer.png" alt="img" />
            <img
              src="assets/images/Vedhainfo.png"
              style={{ width: "8rem" }}
              alt="img"
            />
          </div>
          <div className="small-one-first mt-3 logo-two">
            <img src="assets/images/Group-440.png " alt="img" />
            <img src="assets/images/Agilisium.png" alt="img" width="103px" />
          </div>
          {/* <div className="small-one-two mt-5">
          
          </div> */}
          {/* ..........................second row images............... */}
          <div className="small-one-first mt-4 logo-three">
            <img src="assets/images/Rectangle.png " alt="img" />

            <img
              src="assets/images/kovai.png"
              alt="img"
              className="kovai"
              style={{ width: "88px" }}
            />
          </div>
          <div className="small-one-first mt-3 logo-four">
            <img src="assets/images/Crair.png" alt="img" />

            <img src="assets/images/Aspire-systems.png" alt="img" />
          </div>
        </div>
      </SmallSection>
    </div>
  );
};

export default OurPartner;
