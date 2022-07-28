// Help the Fruit Guy (7kyu)
// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript
function removeRotten(bagOfFruits) {
  return bagOfFruits
    ? bagOfFruits.map((fruit) =>
        fruit.startsWith("rotten") ? fruit.slice(6).toLowerCase() : fruit
      )
    : [];
}
