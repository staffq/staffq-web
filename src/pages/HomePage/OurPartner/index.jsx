import React from "react";
import { Margin, Flex, Fle } from "../../../styles/partner-style";
import { Section, SmallSection } from "../../../styles/partner-style";

const OurPartner = () => {
  return (
    <div>
      <Margin></Margin>
      <Section>
        <h5 className="text-center">Our partners</h5>
        <Fle>
          <div className="me-3 PartnerImages ">
            <img
              src="assets/images/Pfizer.svg "
              style={{ width: "87px" }}
              className="icons-one"
            />
          </div>
          <div className="me-3 PartnerImage">
            <img src="assets/images/cognizant.svg" className="icons-two" />
          </div>
          <div className="me-3 PartnerImage">
            <img src="assets/images/Vedhainfo.svg" className="icons-three" />
          </div>
          <div className="me-3 PartnerImage">
            <img src="assets/images/Group 440.png" className="icons-four" />
          </div>
          <div className="me-3 Agilisum PartnerImage">
            <img src="assets/images/Agilisium.svg" className="icon-five" />
          </div>
        </Fle>

        <Flex>
          <div>
            <img
              src="assets/images/Rectangle.png "
              className="me-5 PartnerImages  icons-second-one "
              style={{ width: "128px" }}
            />
          </div>
          <div>
            <img
              src="assets/images/Hubfly.svg"
              className="me-5 PartnerImages icons-second-two"
              style={{ width: "88px" }}
            />
          </div>
          <div>
            <img
              src="assets/images/Crair.png  "
              className="me-5 PartnerImages icons-second-three "
              style={{ width: "155px" }}
            />
          </div>
          <div>
            <img
              src="assets/images/Aspire systems.svg"
              className="me-5 PartnerImages icons-second-four"
              style={{ width: "120px" }}
            />
          </div>
        </Flex>
      </Section>
      <SmallSection>
        <div className="container">
          <h5 className="text-center">Our partners</h5>
          <div className="small-one-first">
            <img src="assets/images/Pfizer.svg " />

            <img src="assets/images/cognizant.svg" />
          </div>
          <div className="small-one-first mt-3">
            <img src="assets/images/Vedhainfo.svg" style={{ width: "8rem" }} />

            <img src="assets/images/Group 440.png " />
          </div>
          <div className="small-one-two mt-5">
            <img src="assets/images/Agilisium.svg" />
          </div>
          {/* ..........................second row images............... */}
          <div className="small-one-first mt-4">
            <img src="assets/images/Rectangle.png " />

            <img src="assets/images/Hubfly.svg" />
          </div>
          <div className="small-one-first mt-3">
            <img src="assets/images/Crair.png" />

            <img src="assets/images/Aspire systems.svg" />
          </div>
        </div>
      </SmallSection>
    </div>
  );
};

export default OurPartner;
