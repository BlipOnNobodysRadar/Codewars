// 6 kyu Prefill an Array

function prefill(n, v) {
  let newN = Number(n);
  if (typeof n === "boolean") {
    throw new TypeError(`${n} is invalid`);
  }
  if (newN === 0) return [];
  if (!Number.isInteger(newN) || newN < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  return new Array(n).fill(v);
}

function prefill(n, v) {
  if (typeof n !== "number" && typeof n !== "string") {
    throw new TypeError(`${n} is invalid`);
  }
  if (!Number.isInteger(+n) || +n < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  if (+n === 0) return [];
  return new Array(newN).fill(v);
}
