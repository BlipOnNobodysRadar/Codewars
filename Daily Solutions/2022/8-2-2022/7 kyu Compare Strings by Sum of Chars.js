// 7 kyu Compare Strings by Sum of Chars
function compare(s1, s2) {
  if (typeof s1 !== "string") s1 = "";
  if (typeof s2 !== "string") s2 = "";
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (s1.split("").some((c) => !alpha.includes(c))) s1 = "";
  if (s2.split("").some((c) => !alpha.includes(c))) s2 = "";
  if (s1 === s2) return true;
  return (
    s1.split("").reduce((s, c) => c.charCodeAt() + s, 0) ===
    s2.split("").reduce((s, c) => c.charCodeAt() + s, 0)
  );
}
