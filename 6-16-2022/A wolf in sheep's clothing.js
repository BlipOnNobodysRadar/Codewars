// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
  return queue[queue.length - 1] === 'wolf'
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${
        queue.length - queue.indexOf('wolf') - 1
      }! You are about to be eaten by a wolf!`;
}
