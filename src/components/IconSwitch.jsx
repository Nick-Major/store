const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <button onClick={onSwitch} className="icon-switch">
            <i className="material-icons">{icon}</i>
        </button>
    );
};

export default IconSwitch;