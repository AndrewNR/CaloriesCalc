import React from "react";

const GenderToggle = ({ gender, onUpdate }) => {
  const onChangeRadio = e => {
    onUpdate(e.target.value);
    e.stopPropagation();
  };
  const isMale = gender === "male";
  const isFemale = !isMale;
  return (
    <div
      className="genderToggle btn-group btn-group-toggle w-100"
      data-toggle="buttons"
    >
      <label
        className={"btn btn-outline-male" + (isMale ? " active" : "")}
        htmlFor="maleToggle"
      >
        <input
          className=""
          type="radio"
          name="genderToggle"
          id="maleToggle"
          value="male"
          checked={isMale}
          onChange={e => onChangeRadio(e)}
        />
        Male &#9794;
      </label>
      <label
        className={"btn btn-outline-female" + (isFemale ? " active" : "")}
        htmlFor="femaleToggle"
      >
        <input
          className=""
          type="radio"
          name="genderToggle"
          id="femaleToggle"
          value="female"
          checked={isFemale}
          onChange={e => onChangeRadio(e)}
        />
        Female &#9792;
      </label>
    </div>
  );
};

/*
const GenderRadio = ({ gender, onChange }) => {
  const onChangeRadio = e => {
    onChange(e.target.value);
    e.stopPropagation();
  };
  const isMale = gender === "male";
  const isFemale = !isMale;
  return (
    <div className="genderRadio form-group">
      <div className="custom-control custom-radio my-2">
        <input
          className="custom-control-input form-control"
          type="radio"
          name="genderRadio"
          id="maleRadio"
          value="male"
          checked={isMale}
          onChange={e => onChangeRadio(e)}
        />
        <label className="custom-control-label mr-3" htmlFor="maleRadio">
          Male &#9794;
        </label>
      </div>
      <div className="custom-control custom-radio my-2">
        <input
          className="custom-control-input"
          type="radio"
          name="genderRadio"
          id="femaleRadio"
          value="female"
          checked={isFemale}
          onChange={e => onChangeRadio(e)}
        />
        <label className="custom-control-label mr-3" htmlFor="femaleRadio">
          Female &#9792;
        </label>
      </div>
    </div>
  );
};
*/

export default GenderToggle;
