import React from "react";

const iconClass = [
  "bi bi-kanban-fill",
  "bi bi-yin-yang",
  "bi bi-trophy-fill",
  "bi bi-flower1",
  "bi bi-music-note-list",
  "bi bi-gift-fill",
  "bi bi-hypnotize",
  "bi bi-postage-heart-fill",
  "bi bi-infinity",
  "bi bi-puzzle-fill",
  "bi bi-film",
  "bi bi-hearts",
];

function Card({ value, isFlipped, status, handleSelection, modValue }) {
  return (
    <div
      className={`memory-card ${isFlipped ? "flipped" : ""} status-${status}`}
      onClick={() => handleSelection(value)}
      role="button"
      tabIndex={0}
      aria-label="Memory Card"
    >
      <div className="memory-card-inner">

        <div className="memory-card-front">
          <i className="bi bi-stars"></i>
        </div>

        <div className="memory-card-back">
          <i className={iconClass[value % modValue]}></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
