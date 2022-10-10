import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Memory Game
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                                rel="noreferrer noopenner"
                            >
                                New Game
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://github.com/banuaggun/react-memory-game"
                                target="_blank"
                                rel="noreferrer noopenner"
                            >
                                GitHub Repository
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://portfolio-banuaggun.vercel.app/"
                                target="_blank"
                                rel="noreferrer noopenner"
                            >
                                Portfolio
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text">text</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
