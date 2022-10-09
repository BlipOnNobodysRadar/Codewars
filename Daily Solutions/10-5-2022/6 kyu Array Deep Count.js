// 6 kyu Array Deep Count
function deepCount(a) {
  console.log(a);
  let flatArray = [].concat(...a);
  console.log(flatArray);
  console.log(flatArray.some((element) => Array.isArray(element)));
  while (flatArray.some((element) => Array.isArray(element))) {
    flatArray = [].concat(...flatArray);
  }
  console.log(flatArray);
  return flatArray.length;
}
// counts original elements
// then counts subelements and adds to original, recursively
