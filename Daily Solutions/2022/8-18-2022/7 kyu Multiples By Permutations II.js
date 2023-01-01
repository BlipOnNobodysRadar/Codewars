// 7 kyu Multiples By Permutations II

function findLowestInt(k) {
  let n = 1;
  const k2 = k + 1;
  while (
    String(n * k)
      .split("")
      .sort()
      .join("") !==
    String(n * k2)
      .split("")
      .sort()
      .join("")
  ) {
    n++;
  }
  return n;
}

// Notes: String() constructor is useful for math syntax you know will need to be convered to string
// extremely niche use case, but sorting string to compare if two nums have the same digits is easy
