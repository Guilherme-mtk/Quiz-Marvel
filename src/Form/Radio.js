import React from "react";

const Radio = ({ pergunta, options, id, onchange, value, active }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ marginBottom: "1rem" }}>
          <input
            type="radio"
            checked={value === option}
            id={id}
            value={option}
            onChange={onchange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
