// 7 kyu Correct the time-string
function timeCorrect(timestring) {
  if (timestring === null || timestring === "") return timestring;
  console.log("input: " + timestring);

  if (timestring === null || timestring === "") return timestring;
  const validChars = "0123456789:";
  if (timestring.length !== 8) {
    return null;
  }
  for (let i = 0; i < timestring.length; i++) {
    if (!validChars.includes(timestring[i])) return null;
  }

  let timesplit = timestring.split(":");
  let totalSeconds =
    Number(timesplit[0]) * 3600 +
    Number(timesplit[1]) * 60 +
    Number(timesplit[2]);
  let hours = String(Math.floor(totalSeconds / 3600) % 24).padStart(2, "0");
  totalSeconds -= Math.floor(totalSeconds / 3600) * 3600;
  let minutes = String(Math.floor(totalSeconds / 60) % 60).padStart(2, "0");
  totalSeconds -= Math.floor(totalSeconds / 60) * 60;
  let seconds = String(totalSeconds).padStart(2, "0");
  return [hours, minutes, seconds].join(":");
}
/*
validity: 8 char length, ':' at [2] and [5]

P: a string that might be incorrectly formatted
R: correct date-time if formatted correctly, or null if invalid
E: given
P: check for validity first, return null if invalid, then convert to correct date-time is not
*/
// must be nums, must be two chars each, : separated
