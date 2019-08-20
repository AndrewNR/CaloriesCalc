import React from "react";
import GenderToggle from "./controls/GenderToggle";
import InputNum from "./controls/InputNum";
import ResultsTable from "./controls/ResultsTable";
import CalcApi from "./services/CalcApi";

const FitForm = ({ dataChanged }) => {
  const [gender, setGender] = React.useState("male");
  const [height, setHeight] = React.useState(180);
  const [weight, setWeight] = React.useState(80);
  const [waist, setWaist] = React.useState(100);
  const [activity, setActivity] = React.useState(1.2);
  const [age, setAge] = React.useState(25);
  //const [name, setName] = React.useState("");
  //const [email, setEmail] = React.useState("");

  const [calculated, setCalculated] = React.useState(false);

  const [validated, setValidated] = React.useState(true);

  const [calculatedData, setCalculatedData] = React.useState(null);

  const validate = React.useCallback(() => {
    const data = { gender, age, height, weight, waist, activity };
    setValidated(validateData(data));
  }, [gender, age, height, weight, waist, activity]);

  const resetResults = React.useCallback(() => {
    // clear calculated calories, if controlling data was changed
    setCalculatedData(null);
    setCalculated(false);
    validate();
  }, [validate]);

  const validateData = data => {
    return (
      data &&
      ["gender", "age", "height", "weight", "waist", "activity"].reduce(
        (totalValid, fieldName) => {
          totalValid = totalValid && !!data[fieldName];
          return totalValid;
        }
      )
    );
  };

  React.useEffect(() => {
    const data = { gender, age, height, weight, waist, activity };
    if (dataChanged) {
      dataChanged(data);
    }
  }, [age, gender, height, weight, waist, activity, dataChanged]);

  React.useEffect(() => {
    resetResults();
  }, [age, gender, height, weight, waist, activity, resetResults]);

  React.useEffect(() => {
    setHeight(gender === "male" ? 180 : 165);
    setWeight(gender === "male" ? 80 : 60);
    setWaist(gender === "male" ? 70 : 60);
  }, [gender]);

  React.useEffect(() => {
    window.document.title = "Calories Calculator";
  }, []);

  const clearInputField = (e, setterFunc) => {
    e.target.value = "";
    e.stopPropagation();
    setterFunc && setterFunc("");
    return false;
  };

  const doCalculate = e => {
    // calculate for current data
    const data = {
      gender,
      age,
      height,
      weight,
      waist,
      activity
    };
    const resultsRaw = CalcApi.calculate(data);
    console.log("[calculate] resultsRaw:", resultsRaw);
    setCalculatedData(resultsRaw);
    setCalculated(true);
    e.stopPropagation();
  };

  const numFixed = (num, error = "ERROR") => {
    let result = null;
    try {
      result = (num && parseFloat(num.toFixed(2))) || error;
    } catch (e) {
      result = error + ": " + e;
    }
    return result;
  };

  const renderFooter = () => {
    const footerContent =
      !!calculated && calculatedData ? (
        <div>
          <div className="controls text-center pb-2">
            <button
              className="btn btn-outline-info"
              onClick={() => resetResults()}
            >
              Reset
            </button>
          </div>
          <div className="results bg-white">
            {renderResultsTable(calculatedData)}
          </div>
        </div>
      ) : (
        <div className="controls text-center">
          <button
            className="btn btn-primary"
            disabled={calculated || !validated}
            onClick={doCalculate}
          >
            Calculate
          </button>
        </div>
      );

    return <div className="card-footer bg-white px-0">{footerContent}</div>;
  };

  const renderResultsTable = (dataRaw = null) => {
    if (dataRaw) {
      const {
        fatPerc,
        muscleMass,
        metabolism,
        ageCoefficient,
        calsConsumption,
        calsConsumptionWeightLoss
      } = dataRaw;
      const resultsData = {
        fatPerc: { label: "Body Fat", value: numFixed(fatPerc), units: "%" },
        muscleMass: {
          label: "Muscle Mass",
          value: numFixed(muscleMass),
          units: "kg"
        },
        metabolism: {
          label: "Metabolism",
          value: numFixed(metabolism),
          units: "kcal"
        },
        ageCoefficient: {
          label: "Age coefficient",
          value: numFixed(ageCoefficient)
        },
        caloriesConsumption: {
          label: "Daily Calories",
          value: numFixed(calsConsumption),
          units: "kcal/day"
        },
        caloriesConsumptionWeightLoss: {
          label: "Weight Loss Target",
          value: numFixed(calsConsumptionWeightLoss),
          units: "kcal/day"
        }
      };

      return (
        <div>
          <ResultsTable detailsMap={resultsData} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mb-3">
      <div className="row col mx-auto">
        <BSCard
          className="bg-light mx-auto border-0"
          style={{ maxWidth: "30em" }}
          title="Calculate my calories"
          footer={renderFooter()}
        >
          <div className="row">
            <div className="inputs row form-inline">
              <div className="container mb-1 text-center">
                <GenderToggle
                  gender={gender}
                  onUpdate={newGender => setGender(newGender)}
                />
              </div>
              <div className="container mb-1">
                <InputNum
                  id="age"
                  className="age"
                  style={{ maxWidth: "100px" }}
                  label="Age:"
                  value={age}
                  onUpdate={newAge => setAge(newAge)}
                  onFocus={e => clearInputField(e, setAge)}
                  min={10}
                  max={100}
                  step={1}
                  integerOnly={true}
                />
              </div>
              <div className="container mb-1">
                <InputNum
                  id="height"
                  className="height"
                  label="Height (cm):"
                  value={height}
                  onUpdate={newHeight => setHeight(newHeight)}
                  onFocus={e => clearInputField(e, setHeight)}
                  min={100}
                  max={250}
                  step={1}
                  integerOnly={true}
                />
              </div>
              <div className="container mb-1">
                <InputNum
                  id="weight"
                  className="weight"
                  label="Weight (kg):"
                  value={weight}
                  onUpdate={newWeight => setWeight(newWeight)}
                  onFocus={e => clearInputField(e, setWeight)}
                  min={30}
                  max={300}
                  step={0.1}
                />
              </div>
              <div className="container mb-1">
                <InputNum
                  id="waist"
                  className="waist"
                  label="Waist (cm):"
                  value={waist}
                  onUpdate={newWaist => setWaist(newWaist)}
                  onFocus={e => clearInputField(e, setWaist)}
                  min={30}
                  max={600}
                  step={0.1}
                />
              </div>

              <div className="container mb-1">
                <ActivitySelector
                  label="Activity Level"
                  value={activity}
                  onUpdate={newActivity => setActivity(newActivity)}
                />
              </div>
              {/*
              <div className="container mb-1">
                <InputText
                  id="name"
                  className="name"
                  label="Name:"
                  value={name}
                  onChange={newName => setName(newName)}
                  placeholder={(gender === "male" ? "John" : "Jane") + " Smith"}
                />
              </div>
              <div className="container mb-1">
                <InputText
                  id="email"
                  className="email"
                  type="email"
                  label="Email:"
                  value={email}
                  onChange={newEmail => setEmail(newEmail)}
                  placeholder={
                    (gender === "male" ? "john" : "jane") + ".smith@gmail.com"
                  }
                />
              </div> */}
            </div>
          </div>
        </BSCard>
      </div>
    </div>
  );
};

const BSCard = ({
  title = "Card",
  children = null,
  footer = null,
  className = "bg-light mx-auto"
}) => {
  return (
    <div
      className={"card" + (className ? " " + className : "")}
      style={{ maxWidth: "30em", minWidth: "20em" }}
    >
      <div className="card-header bg-primary text-white text-center py-2 mb-0">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body py-1 container-fluid">{children}</div>
      {footer}
    </div>
  );
};

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

export default FitForm;
