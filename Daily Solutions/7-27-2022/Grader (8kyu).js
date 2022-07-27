// Grader (8kyu)
// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript
function grader(score) {
  switch (true) {
    case score > 1:
      return "F";
    case score >= 0.9:
      return "A";
    case score >= 0.8:
      return "B";
    case score >= 0.7:
      return "C";
    case score >= 0.6:
      return "D";
    default:
      return "F";
  }
}

function grader(score) {
  const grade = {
    F: () => score > 1 || score < 0.6,
    A: () => score >= 0.9,
    B: () => score >= 0.8,
    C: () => score >= 0.7,
    D: () => score >= 0.6,
  };
  for (let key in grade) {
    if (grade[key]()) return key;
  }
}
