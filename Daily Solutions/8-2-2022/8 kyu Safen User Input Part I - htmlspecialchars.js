// 8 kyu Safen User Input Part I - htmlspecialchars
function htmlspecialchars(formData) {
  return formData
    .split("")
    .map((c) => {
      if (c === "<") return "&lt;";
      if (c === ">") return "&gt;";
      if (c === '"') return "&quot;";
      if (c === "&") return "&amp;";
      return c;
    })
    .join("");
}
