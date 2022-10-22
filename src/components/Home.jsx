import React from "react";
import { Link } from "react-router-dom";

function Home({ theme }) {
    return (
        <>
            <div
                className={`container text-${
                    theme === "light" ? "dark" : "light"
                }`}
            >
                <h1 className="text-center mt-4">Memory Game</h1>
                <center className="mt-4">
                    <div>
                        <h3
                            data-bs-toggle="collapse"
                            href="#collapseExample"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            Instructions{" "}
                            <i className="bi bi-caret-down-fill"></i>
                        </h3>
                    </div>
                    <div className="collapse" id="collapseExample">
                        <div
                            className={`card card-body text-${
                                theme === "light"
                                    ? ""
                                    : "bg-dark text-light border"
                            }`}
                        >
                            Select two cards untill all the pairs have been
                            revealed. Do this in least possible time & moves.
                        </div>
                    </div>
                </center>
                <h3 className="text-center mt-4">
                    Choose from the difficulty below to start.
                </h3>
                <div className="d-flex justify-content-center my-4">
                    <Link
                        to="/play/easy"
                        className={`btn btn-${
                            theme === "light" ? "dark" : "light"
                        } mx-2`}
                    >
                        Easy
                    </Link>
                    <Link
                        to="/play/medium"
                        className={`btn btn-${
                            theme === "light" ? "dark" : "light"
                        } mx-2`}
                    >
                        Medium
                    </Link>
                    <Link
                        to="/play/hard"
                        className={`btn btn-${
                            theme === "light" ? "dark" : "light"
                        } mx-2`}
                    >
                        Hard
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
