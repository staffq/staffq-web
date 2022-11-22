import React from "react";
import { Margin, Flex, Fle } from "../../../styles/partner-style";
import { Section, SmallSection } from "../../../styles/partner-style";

const OurPartner = () => {
  return (
    <div>
      <Margin></Margin>
      <Section>
        <h5 className="text-center" style={{ color: "rgba(8, 20, 41, 0.7)" }}>
          Our partners
        </h5>
        <Fle>
          <div className="me-3 PartnerImages ">
            <img
              src="assets/images/Pfizer.svg "
              style={{ width: "95px" }}
              className="icons-one"
            alt="img"/>
          </div>
          <div className="me-3 PartnerImage">
            <img
              src="assets/images/cognizant.svg"
              className="icons-two"
              style={{ width: "182px" }}
              alt="img"/>
          </div>
          <div className="me-3 PartnerImage">
            <img
              src="assets/images/Vedhainfo.svg"
              className="icons-three"
              style={{ width: "142px" }}
              alt="img"/>
          </div>
          <div className="me-3 PartnerImage">
            <img
              src="assets/images/Group-440.png"
              className="icons-four"
              style={{ width: "126px" }}
              alt="img"/>
          </div>
        
        </Fle>

        <Flex>
          <div>
            <img
              src="assets/images/Rectangle.png "
              className="me-5 PartnerImages-icons-second-one "
              style={{ width: "128px" }}
              alt="img"/>
          </div>
          <div>
            <img
              src="assets/images/kovai.png"
              className="me-5 PartnerImages-icons-second-two"
              style={{ width: "88px" }}
              alt="img"/>
          </div>
          <div>
            <img src="assets/images/Agilisium.svg"
              
              className="me-5 PartnerImages-icons-second-three "
              style={{ width: "115px" }}
              alt="img"/>
          </div>
          <div>
           
              <img src="assets/images/Aspire-systems.svg"  alt="img" className="me-5 PartnerImages-icons-second-four" 
               style={{ width: "120px" }}/>
          </div>

        
        </Flex>
      </Section>
      <SmallSection>
        <div className="container">
          <h5 className="text-center">Our partners</h5>
          <div className="small-one-first">
            <img src="assets/images/Pfizer.svg "  alt="img"/>
            <img src="assets/images/Vedhainfo.svg" style={{ width: "8rem" }}  alt="img"/>
          </div>
          <div className="small-one-first mt-3">
            

            <img src="assets/images/Group-440.png "  alt="img"/>
            <img src="assets/images/Agilisium.svg"  alt="img"/>
          </div>
          {/* <div className="small-one-two mt-5">
          
          </div> */}
          {/* ..........................second row images............... */}
          <div className="small-one-first mt-4">
            <img src="assets/images/Rectangle.png "  alt="img"/>

            <img src="assets/images/kovai.png"  alt="img"   style={{ width: "88px" }}/>
          </div>
          <div className="small-one-first mt-3">
            <img src="assets/images/Crair.png"  alt="img"/>

            <img src="assets/images/Aspire-systems.svg"  alt="img"/>
          </div>
        </div>
      </SmallSection>
    </div>
  );
};

export default OurPartner;
