// 7 kyu Number Of Occurrences
Array.prototype.numberOfOccurrences = function (a) {
  return this.filter((el) => el === a).length;
};
