import React from "react";
import "./Interest.scss";
import InterestCard from "../../components/interestCard/InterestCard"; // Adjust path as needed
import { interestsInfo } from "../../portfolio"; // Ensure you have interestsInfo in your portfolio.js

export default function Interests() {
  if (interestsInfo.display) {
    return (
      <div className="interests-section" id="interests">
        <h1 className="interests-heading">Interests</h1>
        <div className="interests-card-container">
          {interestsInfo.interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
