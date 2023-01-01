// 8 kyu Total pressure calculation
const solution = (
  molarMass1,
  molarMass2,
  givenMass1,
  givenMass2,
  volume,
  temp
) => {
  const convoluted = givenMass1 / molarMass1 + givenMass2 / molarMass2;
  const R = 0.082;
  temp = temp + 273.15;
  return (convoluted * R * temp) / volume;
};
