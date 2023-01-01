// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript

function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  const thres = (content * threshold) / 100;
  while (content >= thres) {
    content = content - (content * evap_per_day) / 100;
    days++;
  }
  return days;
}
