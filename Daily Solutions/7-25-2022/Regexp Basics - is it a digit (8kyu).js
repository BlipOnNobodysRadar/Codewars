// Regexp Basics - is it a digit? (8kyu)
// https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript

String.prototype.digit = function () {
  const digs = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    1: true,
    0: true,
  };
  return digs[this] ? digs[this] : false;
};
