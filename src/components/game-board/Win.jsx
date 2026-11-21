import React from "react";
import { Link } from "react-router-dom";
import "./win.css";

function Win({ totalFlips, minutes, seconds, theme, onRestart }) {
  const formattedTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return (
    <div className={`win-wrapper theme-${theme}`}>
      <div className="win-card">
        {/* Kupa Rozeti */}
        <div className="win-trophy">
          <i className="bi bi-trophy-fill"></i>
        </div>

        <span className="win-badge">Stage Cleared!</span>
        <h2 className="win-title">Victory!</h2>
        <p className="win-subtitle">
          Awesome memory! You matched all pairs on the board.
        </p>

        {/* Skor İstatistik Kutuları */}
        <div className="win-stats-grid">
          <div className="win-stat-box">
            <span className="stat-icon">
              <i className="bi bi-arrow-repeat"></i>
            </span>
            <span className="stat-label">Total Moves</span>
            <span className="stat-number">{totalFlips}</span>
          </div>

          <div className="win-stat-box">
            <span className="stat-icon">
              <i className="bi bi-stopwatch-fill"></i>
            </span>
            <span className="stat-label">Total Time</span>
            <span className="stat-number">{formattedTime}</span>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="win-actions">
          <button
            type="button"
            className="win-btn primary-btn"
            onClick={onRestart}
          >
            <i className="bi bi-arrow-counterclockwise me-2"></i>
            Play Again
          </button>

          <Link to="/" className="win-btn secondary-btn">
            <i className="bi bi-grid-fill me-2"></i>
            Change Level
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Win;
