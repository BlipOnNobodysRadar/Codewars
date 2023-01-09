// 6 kyu Array Deep Count
function deepCount(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count++;
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

// alt, no recursion
function deepCount(a) {
  let count = 0;
  let subArrays = new Array();
  for (let i = 0; i < a.length; i++) {
    count++;
    if (!Array.isArray(a[i])) {
      continue;
    } else {
      subArrays.push(a[i]);
    }
  }
  while (subArrays.length > 0) {
    currArr = subArrays.pop();
    for (let j = 0; j < currArr.length; j++) {
      count++;
      if (!Array.isArray(currArr[j])) {
        continue;
      } else {
        subArrays.push(currArr[j]);
      }
    }
  }
  return count;
}
