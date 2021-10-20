import React from "react";

const Input = ({ onChange, isValid, errorText }) => {
  return (
    <div>
      <label for="pokemonNickname">Nickname</label>
      <input
        type="text"
        className={`form-control ${errorText ? "is-invalid" : "is-valid"}`}
        id="pokemonNickname"
        placeholder="Enter your pokemon nickname"
        onChange={onChange}
      />
      <div class="invalid-feedback">{errorText}</div>
      <div class="valid-feedback">Looks good.</div>
    </div>
  );
};

export default Input;
