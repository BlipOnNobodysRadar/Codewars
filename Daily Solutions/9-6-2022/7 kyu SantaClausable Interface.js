// 7 kyu SantaClausable Interface
function isSantaClausable(obj) {
  if (typeof obj !== "object") return false;
  return (
    typeof obj.sayHoHoHo === "function" &&
    typeof obj.distributeGifts === "function" &&
    typeof obj.goDownTheChimney === "function"
  );
}
