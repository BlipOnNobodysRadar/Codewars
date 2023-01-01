// 4 kyu Explosive Sum

// n
// n - 1, 1
//

// use current partition for next partition
// init is n
// first print p[], then update p[] to store next partition
// how to get next partition from given partition:
/*
  Values in p[] must be sorted in descending order
  1. find the right-most value in p[] that !== 1, store the count of 1's in rem_val
  (rem_val represents the sum of values on the right side to be updated)
  store the index of the non-one value as k
  2. decrease the value of p[k] by 1 and increase rem_val by 1
    a) if p[k] is >= to rem_val --> p[k+1] = rem_val and p = [0...k+1]
    b} else the sum of ones is higher than the decremented p[k];
      in this case, divide rem_val by p[k] and assign that value to positions after p[k]
  3. copy p[k] to the next position (?), increment
    so p[k+1] = p[k], then k++, while(p[k] < rem_val) rem_val = rem_val - p[k]
    then p[k+1] = rem_val and p[0...k+1] is new parition
*/

// doesn't handle largest
function sum(num) {
  const possiblePartitions = [];
  let p = new Array(num);
  let k = 0;
  p[k] = num;

  while (true) {
    possiblePartitions.push(String(p) + " " + (k + 1));

    let remaining = 0;

    while (k >= 0 && p[k] === 1) {
      remaining += p[k];
      k--;
    }

    if (k < 0) {
      return possiblePartitions.length;
    }

    p[k]--;
    remaining++;
    // sorting order off, adjust
    while (remaining > p[k]) {
      p[k + 1] = p[k];
      remaining = remaining - p[k];
      k++;
    }
    p[k + 1] = remaining;
    k++;
  }
}
