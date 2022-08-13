// 6 kyu Statistics for an Athletic Association
function stat(strg) {
  if (strg === "") return "";
  const secondsArr = strg.split(",").map((subStr) => {
    subStr = subStr.trim();
    const hms = subStr.split("|").map((val) => +val);
    // should now be [hours,mins,seconds];
    let seconds = hms[0] * 3600 + hms[1] * 60 + hms[2];
    return seconds;
  });
  const l = secondsArr.length;
  let range = Math.max(...secondsArr) - Math.min(...secondsArr);
  let mean = secondsArr.reduce((sum, num) => sum + num, 0) / l;
  secondsArr.sort((a, b) => a - b);
  let median =
    l % 2 !== 0
      ? secondsArr[Math.ceil(l / 2) - 1]
      : (secondsArr[l / 2] + secondsArr[l / 2 - 1]) / 2;

  return `Range: ${formatSeconds(range)} Average: ${formatSeconds(
    mean
  )} Median: ${formatSeconds(median)}`;
}

function formatSeconds(seconds) {
  let hours = 0;
  let minutes = 0;
  while (seconds >= 3600) {
    hours++;
    seconds -= 3600;
  }
  while (seconds >= 60) {
    minutes++;
    seconds -= 60;
  }
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = Math.floor(seconds).toString().padStart(2, "0");
  return `${hours}|${minutes}|${seconds}`;
}
