// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
function longestConsec(strarr, k) {
    const maxIndex = strarr.length-1;
    if(strarr.length === 0 || k > strarr.length || k <= 0) return "";
    let concatStrings = strarr.map((currStr, index) => {
      if(index <= maxIndex) {
        let concatString = "";
        for(let i = 0; i < k; i++) {
          if(index + i <= maxIndex){
            concatString += strarr[index + i];
          }
        }
        return concatString;
      }

    },[])
    let longestString = "";
    for(let i = 0; i < concatStrings.length; i++) {
      if(concatStrings[i].length > longestString.length) {
        longestString = concatStrings[i];
      }
    }
    return longestString;
}
