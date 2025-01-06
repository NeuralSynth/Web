function Navbar({ onAddTask, onRemoveTask }) {
    return (
        <div className="toolbox-cont">
            <div className="toolbox-priority-cont">
                <div className="lightpink color"></div>
                <div className="lightgreen color"></div>
                <div className="lightblue color"></div>
                <div className="black color"></div>
            </div>
            <div className="action-btn-cont">
                <div className="add-btn" onClick={onAddTask}>
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="remove-btn" onClick={onRemoveTask}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    );
}

export default Navbar;