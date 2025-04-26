import React, { useState } from "react";
import Switch from "react-switch";

const SwitchBar = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <Switch onChange={handleChange} 
    checked={checked}       
    checkedIcon={false} 
    uncheckedIcon={false}
    onColor="#1A5FFF"
    height={20}
    width={40}
    handleDiameter={18}
    />
  );
};

export default SwitchBar;
