// Data Reverse (6kyu)
// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

function dataReverse(data) {
  // break into subseq's of 8, reverse the order of that, join
  const seqs = [];
  while (data.length > 0) {
    seqs.push(data.splice(0, 8));
  }
  seqs.reverse();
  let retArr = [];
  seqs.forEach((seq) => {
    retArr = retArr.concat(seq);
  });
  return retArr;
}
