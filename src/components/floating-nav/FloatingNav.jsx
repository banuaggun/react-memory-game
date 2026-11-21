import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./floating-nav.css";

function FloatingNav({ theme, switchTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header ref={navRef} className={`floating-nav-wrapper theme-${theme}`}>
      <div className="floating-nav-container">

        <Link to="/" className="brand-pill" onClick={closeMenu}>
          <span className="brand-icon">
            <i className="bi bi-grid-3x3-gap-fill"></i>
          </span>
          <span className="brand-text">Memory Game</span>
        </Link>

        <div className="nav-actions">
          <button
            type="button"
            className={`fab-trigger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <nav className={`speed-dial-menu ${isOpen ? "open" : ""}`}>
            <Link
              to="/"
              className="dial-item"
              style={{ "--delay": "0.05s" }}
              onClick={closeMenu}
            >
              <span className="dial-label">Home</span>
              <span className="dial-icon">
                <i className="bi bi-house-door-fill"></i>
              </span>
            </Link>

            <a
              href="https://github.com/banuaggun/react-memory-game"
              target="_blank"
              rel="noreferrer noopener"
              className="dial-item"
              style={{ "--delay": "0.1s" }}
              onClick={closeMenu}
            >
              <span className="dial-label">Project Repository</span>
              <span className="dial-icon">
                <i className="bi bi-github"></i>
              </span>
            </a>

            <a
              href="https://portfolio-banuaggun.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="dial-item"
              style={{ "--delay": "0.15s" }}
              onClick={closeMenu}
            >
              <span className="dial-label">My Portfolio</span>
              <span className="dial-icon">
                <i className="bi bi-stars"></i>
              </span>
            </a>

            <button
              type="button"
              className="dial-item theme-dial"
              style={{ "--delay": "0.2s" }}
              onClick={() => {
                switchTheme();
                closeMenu();
              }}
              aria-label="Switch Theme"
            >
              <span className="dial-label">
                {theme !== "light" ? "Light Mode" : "Dark Mode"}
              </span>
              <span className="dial-icon">
                <i
                  className={`bi ${
                    theme !== "light" ? "bi-sun-fill" : "bi-moon-stars-fill"
                  }`}
                ></i>
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default FloatingNav;
