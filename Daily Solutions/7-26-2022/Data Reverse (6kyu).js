// Data Reverse
// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

function dataReverse(data) {
  // break into subseq's of 8, reverse the order of that, join
  //console.log(data.splice(0,8));

  //O(n) -- just loop from the end of the data array and construct return arr as you go.
  const seqs = [];
  while (data.length > 0) {
    // O(n/8)
    seqs.push(data.splice(0, 8));
  }
  seqs.reverse(); // unsure of O
  let retArr = [];
  seqs.forEach((seq) => {
    retArr = retArr.concat(seq);
  });
  return retArr;
}
