// 7 kyu We've crashed on a distance planet in our galaxy! When do leap years occur here
function isLeapYear(duration, year) {
  const leapYearGap = 1 / (duration - Math.floor(duration));
  return year % leapYearGap === 0;
}
