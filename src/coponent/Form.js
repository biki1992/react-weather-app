import React from "react";
import "../css/Form.css";

const Form = ({ onSubmit, handleChange, value }) => {
  return (
    <div className="container-fluid my-5 text-center align-center">
      <form
        onSubmit={(e) => {
          // e.preventDefault();
          // console.log(e);
          onSubmit(e);
        }}
        className="form"
      >
        <label htmlFor="city" className="form__label">
          City
        </label>
        <input
          id="city"
          type="text"
          className="mx-4 p-2 form__city"
          value={value.city}
          autoComplete="off"
          onChange={handleChange}
        />

        <label htmlFor="city" className="form__label">
          Country
        </label>
        <input
          id="country"
          type="text"
          className="mx-4 p-2 form__country"
          autoComplete="off"
          value={value.country}
          onChange={handleChange}
        />
        <input
          type="submit"
          className="mx-3 p-2 form__button"
          value="Get Weather"
        />
      </form>
    </div>
  );
};

export default Form;
