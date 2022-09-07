import React from 'react';


const SwitchColor = ({isDark ,setIsDark}) => {

    const handleClick = () => {
        setIsDark(!isDark)
      
            }

    return (
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheck" onClick={handleClick}/>
  <label className="form-check-label" htmlFor="flexSwitchCheck">{isDark?"dark":"light"}</label>
 
</div>
    );

};

export default SwitchColor;