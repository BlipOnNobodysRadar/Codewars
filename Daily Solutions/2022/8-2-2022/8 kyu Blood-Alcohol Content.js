// 8 kyu Blood-Alcohol Content
function bloodAlcoholContent(drinks, weight, sex, time) {
  const a = drinks.ounces * drinks.abv;
  const r = sex === "male" ? 0.73 : 0.66;
  return +(((a * 5.14) / weight) * r - 0.015 * time).toFixed(4);
}
