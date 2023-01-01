// 6 kyu Prefill an Array

function prefill(n, v) {
  if (typeof n !== "boolean") {
    let newN = Number(n);
  } else {
    throw new TypeError(`${n} is invalid`);
  }
  if (newN === 0) return [];
  if (!Number.isInteger(newN) || newN < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  return new Array(n).fill(v);
}

console.log(prefill(3, 1));
console.log(prefill(2, "abc"));
console.log(prefill("1", 1));
console.log(prefill(3, prefill(2, "2d")));
console.log(prefill("xyz", 1));
