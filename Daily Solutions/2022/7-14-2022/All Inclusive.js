// All Inclusive?
// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript
function containAllRots(strng, arr) {
  if (strng === "") return true;
  const allRots = [];
  let shiftingStrArr = strng.split("");
  for (let i = 0; i < strng.length; i++) {
    shiftingStrArr.push(shiftingStrArr.shift());
    allRots.push(shiftingStrArr.join(""));
  }
  const rots = new Set(arr.filter((str) => allRots.includes(str)));
  return new Set(allRots).size === rots.size;
}
/*
function isRot(str1, str2) {
  const validLength = str2.length === str1.length;
  let fc = str2.indexOf(str1[0]);


  // str2.split('').every(c => str1.includes(c));
  // is a rotation if you can split into two substrings and rotate one
  // abcabc => abc, bca, cab. str1 + str1 contains every possible rotation as substrings.
  // abcdabcd => abcd bcda cdab dabc 
  // bcda => a at index 3. 4-3 = 1, first char of rotated (b) should be same char
  // as orig[1] (b). 
}*/

// simplified solution (doesn't handle repeating strings)
/*
function containAllRots(strng, arr) {
  console.log(strng);
  console.log(arr);
  if(strng === '') return true;
  const allRotsStr = strng + strng;
  console.log(allRotsStr)
  const rots = new Set(arr.filter(str => allRotsStr.includes(str)));
  console.log(rots);
  return rots.size === strng.length;
}*/
