import React from "react";

function HowToCard({ onStartEasy }) {
  return (
    <div className="stage-card howto-stage">
      <div className="howto-header">
        <span className="howto-badge">
          <i className="bi bi-question-circle-fill me-1"></i> Game Guide
        </span>
        <h2>How to Play</h2>
        <p>Master the board in three simple steps</p>
      </div>

      <div className="howto-steps">
        <div className="step-box">
          <span className="step-num">1</span>
          <div>
            <h4>Flip Two Cards</h4>
            <p>Tap any two hidden cards on the board to reveal their icons.</p>
          </div>
        </div>

        <div className="step-box">
          <span className="step-num">2</span>
          <div>
            <h4>Find Matching Pairs</h4>
            <p>If the icons match, they stay open. If not, remember their spots!</p>
          </div>
        </div>

        <div className="step-box">
          <span className="step-num">3</span>
          <div>
            <h4>Beat Your Best</h4>
            <p>Clear all pairs in the shortest time and fewest moves possible.</p>
          </div>
        </div>
      </div>

      <button type="button" className="stage-cta-btn" onClick={onStartEasy}>
        <span>Got It, Let's Play!</span>
        <i className="bi bi-play-fill"></i>
      </button>
    </div>
  );
}

export default HowToCard;
