// 7 kyu Name Array Capping.js
function capMe(names) {
  return names.map(
    (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
  );
}
