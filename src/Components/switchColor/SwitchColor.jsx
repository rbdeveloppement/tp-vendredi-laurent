import React from 'react';


const SwitchColor = ({isDark ,setDark}) => {

    const handleClick = () => {
        setDark(!isDark)
    }

    return (
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheck" onClick={handleClick}/>
  <label className="form-check-label" for="flexSwitchCheck"></label>
</div>
    );

};

export default SwitchColor;