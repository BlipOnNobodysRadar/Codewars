// 7 kyu Last
function last(list) {
  if (
    (typeof list === "string" && arguments.length === 1) ||
    Array.isArray(list)
  ) {
    return list[list.length - 1];
  }
  return arguments[arguments.length - 1];
}
