// 7 kyu Return the Missing Element
function getMissingElement(superImportantArray) {
  for (i = 0; i < 10; i++) {
    if (superImportantArray.indexOf(i) === -1) return i;
  }
}
