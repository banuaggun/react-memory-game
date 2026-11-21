import React, { useState } from "react";
import { Link } from "react-router-dom";
import HowToCard from "./HowToCard";
import "./home.css";

const LEVELS = {
  easy: {
    id: "easy",
    label: "Easy",
    grid: "4 × 4",
    pairs: 8,
    desc: "Great for a quick warm-up and sharpening your focus.",
    icon: "bi-emoji-smile-fill",
    accent: "#10b981",
    path: "/play/easy",
  },
  medium: {
    id: "medium",
    label: "Medium",
    grid: "5 × 4",
    pairs: 10,
    desc: "Balanced challenge requiring solid spatial memory.",
    icon: "bi-lightning-charge-fill",
    accent: "#6366f1",
    path: "/play/medium",
  },
  hard: {
    id: "hard",
    label: "Hard",
    grid: "6 × 4",
    pairs: 12,
    desc: "Ultimate concentration test for memory masters.",
    icon: "bi-fire",
    accent: "#f43f5e",
    path: "/play/hard",
  },
};

function Home({ theme }) {
  const [activeTab, setActiveTab] = useState("easy");
  const currentLevel = LEVELS[activeTab];

  return (
    <main className={`home-wrapper theme-${theme}`}>
      <div className="home-container">

        <div className="game-dock-bar">
          <div className="level-tabs" role="tablist">
            {Object.values(LEVELS).map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                role="tab"
                aria-selected={activeTab === lvl.id}
                className={`dock-tab ${activeTab === lvl.id ? "active" : ""}`}
                style={{ "--accent": lvl.accent }}
                onClick={() => setActiveTab(lvl.id)}
              >
                <i className={`bi ${lvl.icon} tab-icon`}></i>
                <span>{lvl.label}</span>
              </button>
            ))}
          </div>

          <span className="dock-divider" aria-hidden="true"></span>

          <button
            type="button"
            className={`howto-circle-btn ${
              activeTab === "howto" ? "active" : ""
            }`}
            onClick={() =>
              setActiveTab((prev) => (prev === "howto" ? "easy" : "howto"))
            }
            aria-label="How to Play"
          >
            <span className="q-mark">?</span>
            <span className="q-label">HOW TO</span>
          </button>
        </div>

        <div className="stage-container" key={activeTab}>
          {activeTab === "howto" ? (
            <HowToCard onStartEasy={() => setActiveTab("easy")} />
          ) : (
            <div
              className="stage-card level-stage"
              style={{ "--accent": currentLevel.accent }}
            >
              <div className="level-stage-top">
                <div className="level-badge-pill">
                  <i className={`bi ${currentLevel.icon} me-2`}></i>
                  {currentLevel.label} Mode
                </div>
                <span className="grid-dimension">{currentLevel.grid}</span>
              </div>

              <h1 className="stage-title">
                Find {currentLevel.pairs} Matching Pairs
              </h1>
              <p className="stage-desc">{currentLevel.desc}</p>

              <div className="stage-meta">
                <div className="meta-item">
                  <i className="bi bi-grid-3x3"></i>
                  <span>{currentLevel.pairs * 2} Cards</span>
                </div>
                <div className="meta-item">
                  <i className="bi bi-stopwatch"></i>
                  <span>Timed Run</span>
                </div>
              </div>

              <Link to={currentLevel.path} className="stage-cta-btn">
                <span>Start {currentLevel.label} Game</span>
                <i className="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
