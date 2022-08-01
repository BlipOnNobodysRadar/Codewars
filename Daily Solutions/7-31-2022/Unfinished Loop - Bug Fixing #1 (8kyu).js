// Unfinished Loop - Bug Fixing #1 (8kyu)
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; ) {
    newArray.push(counter);
    counter++;
  }

  return newArray;
}
