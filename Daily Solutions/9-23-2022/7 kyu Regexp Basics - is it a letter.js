// 7 kyu Regexp Basics - is it a letter
String.prototype.isLetter = function () {
  if (this.length > 1 || this.length === 0) return false;
  const val = this.charCodeAt();
  return (val >= 65 && val <= 90) || (val >= 97 && val <= 122);
};
