import React, { useContext } from "react";
import { Fade, Slide } from "react-reveal";
import "./InterestCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function InterestCard({ interest }) {
  const { isDark } = useContext(StyleContext);

  if (!interest.imagePath) {
    console.error(`Image of ${interest.title} is missing in interests section`);
  }

  return (
    <div className="interest-card">
      <Fade left duration={1000}>
        {/* Text Container */}
        <div className={`interest-card-text ${isDark ? "dark-mode" : ""}`}>
          <h5 className="interest-text-title">{interest.title}</h5>
          <ul className="interest-text-bullets">
            {interest.descBullets.map((item, i) => (
              <li key={i} className="subTitle">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Image Container */}
        <div className="interest-card-image">
          <img
            crossOrigin={"anonymous"}
            src={interest.imagePath}
            alt={interest.title}
            className="interest-roundedimg"
          />
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="interest-card-border"></div>
      </Slide>
    </div>
  );
}
