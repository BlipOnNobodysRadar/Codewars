// Is your period late (8kyu)
// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript

function periodIsLate(last, today, cycleLength) {
  return (
    (today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24) > cycleLength
  );
}
