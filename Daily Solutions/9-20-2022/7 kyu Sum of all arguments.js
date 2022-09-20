// 7 kyu Sum of all arguments
function sum(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}
