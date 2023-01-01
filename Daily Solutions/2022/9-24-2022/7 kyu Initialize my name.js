// 7 kyu Initialize my name.
function initializeNames(name) {
  const names = name.split(" ");
  return names.length <= 2
    ? name
    : names
        .map((n, i) => (i !== 0 && i !== names.length - 1 ? n[0] + "." : n))
        .join(" ");
}
