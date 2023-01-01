// 8 kyu Be Concise I - The Ternary Operator
const describeAge = (a) => {
  let p = "You're a(n) ";
  return a <= 12
    ? p + "kid"
    : a >= 13 && a <= 17
    ? p + "teenager"
    : a >= 18 && a <= 64
    ? p + "adult"
    : p + "elderly";
};
