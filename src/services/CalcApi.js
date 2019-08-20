const CaloriesCalculator = {
  calculate: function(opts) {
    const fatPerc = calcFatPerc(opts) || 0;
    const muscleMass = calcMuscleMass(opts, fatPerc);
    const metabolism = calcMetabolism(muscleMass);

    const ageReductions = calcAgeReductions(opts.age);
    const { coefficient: ageCoefficient = 1 } = ageReductions;

    console.log("[calcCaloriesConsumption] ageReductions", ageReductions);

    const calsConsumption = calcCaloriesConsumption(
      metabolism,
      opts.activity,
      ageCoefficient
    );

    const calsConsumptionWeightLoss = calsConsumption * 0.8;

    return {
      fatPerc,
      muscleMass,
      metabolism,
      ageCoefficient,
      calsConsumption,
      calsConsumptionWeightLoss
    };
  }
};

const calcFatPerc = ({ gender = "male", waist, height, weight }) => {
  let result = null;
  if (waist && height && weight && waist > 10 && height > 50 && weight > 10) {
    result =
      gender === "male"
        ? calcFatPercMale({ height, weight, waist })
        : calcFatPercFemale({ height, weight, waist });
  }
  return result;
};

const calcFatPercMale = ({ height, weight, waist }) => {
  let result = null;
  if (waist && height && weight && waist > 10 && height > 50 && weight > 10) {
    result = 0.31457 * waist - 0.10969 * weight + 10.834;
  }
  return result;
};
const calcFatPercFemale = ({ height, weight, waist }) => {
  let result = 1;
  if (waist && height && weight && waist > 10 && height > 50 && weight > 10) {
    result =
      100 -
      (0.11077 * waist - 0.17666 * height * 0.01 + 0.14354 * weight + 51.033);
  }
  return result;
};

const calcMuscleMass = ({ weight }, fatPerc) => {
  let result = 0;
  if (weight && fatPerc && weight > 10 && fatPerc > 0 && fatPerc <= 100) {
    result = weight - (weight * fatPerc) / 100;
  }
  return result;
};

const calcMetabolism = muscleMass => {
  let result = 0;
  if (muscleMass && muscleMass > 0) {
    result = 370 + 21.6 * muscleMass;
  }
  return result;
};

const calcCaloriesConsumption = (
  metabolism = 0,
  activityMultiplier = 1,
  ageCoefficient = 1
) => {
  return metabolism * activityMultiplier * ageCoefficient;
};

const calcAgeReductions = age => {
  let result = { coefficient: 1.0 };

  if (age >= 20) {
    const yearsOver20 = age - 20;
    const decadesOver20 = Math.ceil(yearsOver20 / 10.0);
    const ageReductionCoef = decadesOver20 * 0.02;
    result = Object.assign({}, result, {
      yearsOver20,
      decadesOver20,
      ageReductionCoef,
      coefficient: 1.0 - ageReductionCoef
    });
  }
  return result;
};

export default CaloriesCalculator;
