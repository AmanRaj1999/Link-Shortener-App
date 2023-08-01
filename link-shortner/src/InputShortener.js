import React, { useState } from "react";

export const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button onClick={handleClick}>Shorten</button>
      /div></div><
    </div>
  );
};

export default InputShortener;
