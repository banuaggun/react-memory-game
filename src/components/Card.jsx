import React from "react";

const starsMarkClass = "bi bi-stars";

const iconClass = [
    "bi bi-kanban-fill",
    "bi bi-yin-yang",
    "bi bi-trophy-fill",
    "bi bi-flower1",
    "bi bi-music-note-list",
    "bi bi-gift-fill",
    "bi bi-hypnotize",
    "bi bi-postage-heart-fill",
];

function Card({ value, visible }) {
    return (
        <div className="col-3">
            <center>
                <div className="mx-2 my-3 py-4 card">
                    <h2>
                        <i className={`${visible ? iconClass[value%8] : starsMarkClass}`}></i>
                        {value}
                    </h2>
                </div>
            </center>
        </div>
    );
}

export default Card;
