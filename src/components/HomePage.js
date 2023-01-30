import React, { useState } from "react";

export const HomePage = ({ labelOn, labelOff }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <p>welcome To DCX!</p>
      <h1>Engineering Experience off 123456!</h1>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {/* by default Off will be displayed */}
        {isChecked ? labelOn : labelOff} 
      </label>
    </>
  );
};
