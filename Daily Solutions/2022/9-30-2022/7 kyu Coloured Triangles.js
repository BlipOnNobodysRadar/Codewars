// 7 kyu Coloured Triangles
function triangle(row) {
  if (row.length === 1) return row;
  let newRow = [];
  for (let i = 0; i < row.length - 1; i++) {
    let red = true;
    let blue = true;
    let green = true;
    if (row[i] === "R" || row[i + 1] === "R") red = false;
    if (row[i] === "B" || row[i + 1] === "B") blue = false;
    if (row[i] === "G" || row[i + 1] === "G") green = false;
    if (row[i] === row[i + 1]) {
      newRow.push(row[i]);
    } else {
      if (red) newRow.push("R");
      if (blue) newRow.push("B");
      if (green) newRow.push("G");
    }
  }
  if (row.length <= 2) return newRow.join("");
  return triangle(newRow.join(""));
}
