// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((sum, score) => sum + score, 0)/classPoints.length
  }