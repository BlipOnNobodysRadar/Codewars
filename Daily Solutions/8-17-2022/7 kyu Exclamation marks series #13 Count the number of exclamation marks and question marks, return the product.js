// 7 kyu Exclamation marks series #13 Count the number of exclamation marks and question marks, return the product
function product(string) {
  const counts = string.split("").reduce(
    (acc, item) => {
      if (item === "!") acc[0] = acc[0] + 1;
      if (item === "?") acc[1] = acc[1] + 1;
      return acc;
    },
    [0, 0]
  );
  return counts[0] * counts[1];
}
