// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
  function rowWeights(array){
    return array.reduce((arr, val, i) => {
      i % 2 === 0 ? arr[0]+=val : arr[1]+=val;
      return arr;
      },[0,0]);
  }