import React from "react";
import "./Brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";
import dropbox from "../../assets/dropbox.png";
import atlasian from "../../assets/atlassian.png";

const Brand = () => {
  return (
    
      <div className="brand__container section__padding">
        <div >
          <img src={google} alt="google" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
        <div >
          <img src={atlasian} alt="atlasian" />
        </div>
        <div >
          <img src={dropbox} alt="dropbox" />
        </div>
        <div >
          <img src={shopify} alt="shopify" />
        </div>
      </div>
   
  );
};

export default Brand;
