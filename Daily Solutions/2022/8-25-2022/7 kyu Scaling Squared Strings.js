// 7 kyu Scaling Squared Strings
function scale(strng, k, n) {
  if (strng === "") return strng;
  const hor = strng.split("\n").map((substr) =>
    substr
      .split("")
      .map((c) => c.repeat(k))
      .join("")
  );
  const vert = [];
  hor.forEach((entry) => {
    for (let i = 1; i <= n; i++) {
      vert.push(entry);
    }
  });
  return vert.join("\n");
}
