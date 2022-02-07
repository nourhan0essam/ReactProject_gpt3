import React from "react";
import Feature from "../../components/feature/Feature";
import "./Features.css";

const featuresDate = [
  {
    className: "row",
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    className: "row",
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    className: "row",
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    className: "row",
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  }
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today and Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
          <div className="gpt3__features-container">{featuresDate.map((feature, index) => (<Feature title={feature.title} className={feature.className} text={feature.text} key={feature.title+index}/>))}</div>
    </div>
  );
};

export default Features;
