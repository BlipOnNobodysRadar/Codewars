// 5 kyu Math Issues
// convert to string, split on ".", first entry in 2nd arr >= 5 round up

Math.round = function (number) {
  const splitStr = String(number).split(".");
  if (splitStr[1]) {
    return Number(splitStr[1][0]) >= 5 ? Math.ceil(number) : Math.floor(number);
  }
  return number;
};

Math.ceil = function (number) {
  const splitStr = String(number).split(".");
  return splitStr[1] ? Number(splitStr[0]) + 1 : Number(splitStr[0]);
};

Math.floor = function (number) {
  const splitStr = String(number).split(".");
  return Number(splitStr[0]);
};
