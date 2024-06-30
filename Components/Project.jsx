import React, { useState } from "react";
import Card from "./Card.jsx";
import "../src/css/project.css";

const cardsData = [
  {
    backgroundColor: "#54E8A9",
    title: "Zero-cost Possibilities",
    description:
      "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.",
  },
  {
    backgroundColor: "#54E8A9",
    title: "Zero-cost Possibilities",
    description:
      "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.",
  },
  {
    backgroundColor: "#54E8A9",
    title: "Zero-cost Possibilities",
    description:
      "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.",
  },
  {
    backgroundColor: "#54E8A9",
    title: "Zero-cost Possibilities",
    description:
      "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.",
  },
  {
    backgroundColor: "#54E8A9",
    title: "Zero-cost Possibilities",
    description:
      "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.",
  },
  {
    backgroundColor: "#54E8A9",
    title: "Zero-cost Possibilities",
    description:
      "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.",
  },
  // Additional cards omitted for brevity
];

const Project = () => {
  const [displayedCards, setDisplayedCards] = useState(3);

  const loadMoreCards = () => {
    const newDisplayedCards = displayedCards + 3;
    setDisplayedCards(Math.min(newDisplayedCards, cardsData.length));
  };

  return (
    <div className="project--container">
      <div className="gradient-cards">
        {cardsData.slice(0, displayedCards).map((card, index) => (
          <Card
            key={index}
            backgroundColor={card.backgroundColor}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      {displayedCards < cardsData.length && (
        <button className="load-more-btn" onClick={loadMoreCards}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Project;
