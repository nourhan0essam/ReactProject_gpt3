import React from "react";
import { Feature } from "../../components";
import "./WhatGTP.css";

const WhatGTP = () => {
  return (
    <>
      <div className="gpt3__whatgpt3 section-margin" id="whgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature
            className="row"
            title="What is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature
            className="column"
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Feature
            className="column"
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            className="column"
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </>
  );
};

export default WhatGTP;
