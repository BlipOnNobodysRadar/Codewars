// 8 kyu Unexpected parsing
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  const obj = { status: msg };
  return obj;
}
