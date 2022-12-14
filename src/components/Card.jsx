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
    "bi bi-infinity",
    "bi bi-puzzle",
    "bi bi-film",
    "bi bi-hearts",
];

function Card({ value, visible, handleSelection, bgColor, theme, difficulty }) {

    const modValue = difficulty * 2;

    return (
        <div className="col-3">
            <center>
                <div className={`mx-2 bg-${bgColor} bg-opacity-85 my-3 py-4 card`} onClick = {() => handleSelection(value)}>
                    <h2 style={{fontSize:"2.2rem"}}>
                        <i className={`${visible ? iconClass[value%modValue] : starsMarkClass}`}></i>
                        
                    </h2>
                </div>
            </center>
        </div>
    );
}

export default Card;
