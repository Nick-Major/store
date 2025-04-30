const IconSwitch = (icon, onSwitch) => {
    return (
        <button onClick={onSwitch} className={icon}>
            {icon === 'view_module' ? (
                <i className="material-icons">view_module</i>
                ) : (
                <i className="material-icons">view_list</i>
                )}
        </button>
    )
}

export default IconSwitch;