import React from 'react';

const Ticket = ({ id, description, onLockToggle }) => {
    return (
        <div className="ticket-cont">
            <div className="ticket-color"></div>
            <div className="ticket-id">{id}</div>
            <div className="task-area" contentEditable="true">{description}</div>
            <div className="ticket-lock" onClick={onLockToggle}>
                <i className="fa-solid fa-lock"></i>
            </div>
        </div>
    );
};

export default Ticket;