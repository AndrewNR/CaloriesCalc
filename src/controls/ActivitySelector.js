import React from "react";

const ActivitySelector = ({
  value,
  onUpdate,
  label = "",
  className = "",
  ...restProps
}) => {
  const activityOptions = {
    1.1: {
      label: "1 - Very Low",
      desc: "Passive lifestyle: low or no sports at all; little walking."
    },
    1.2: {
      label: "2 - Low",
      desc: "Low activity; sports 1-2 times per week; shorter walks."
    },
    1.3: {
      label: "3 - Medium",
      desc: "Moderate activity; sports 3-4 times/week, short walks."
    },
    1.4: {
      label: "4 - High",
      desc: "High activity; sports 5-6 times/week (example: fitness trainer)."
    },
    1.7: {
      label: "5 - Extreme",
      desc:
        "Daily high-intensive activity; sports 2 times per day; marathons, competitions, etc."
    }
  };

  return (
    <div className="form-group container">
      <label
        htmlFor="activitySelect"
        className="col-sm-4 pl-0 justify-content-start"
      >
        {label}
      </label>
      <select
        id="activitySelect"
        className={"form-control col-sm-8 " + className}
        value={value}
        {...restProps}
        onChange={e => {
          onUpdate(parseFloat(e.target.value));
          e.stopPropagation();
        }}
      >
        {Object.keys(activityOptions).map((option, index) => {
          const { label, desc } = activityOptions[option];
          return (
            <option key={index} value={option} label={label} title={desc}>
              {label}
            </option>
          );
        })}
      </select>
      <div
        className="form-text text-info w-100 text-center"
        style={{ fontSize: "small" }}
      >
        {activityOptions[value].desc}
      </div>
    </div>
  );
};

export default ActivitySelector;
