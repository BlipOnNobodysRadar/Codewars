// 7 kyu Head, Tail, Init and Last
function head(arr) {
  return arr[0];
}
function last(arr) {
  return arr[arr.length - 1];
}
function init(arr) {
  return arr.slice(0, arr.length - 1);
}
function tail(arr) {
  return arr.slice(1);
}
