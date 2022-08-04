// 8 kyu What's up next
function nextItem(xs, item) {
  let found = undefined;
  // for of loops iterate over any iterable object, including arrays.
  for (let x of xs) {
    if (found) return x; // found set in previous iteration
    if (x == item) found = true; // executes if item found
  }
  return undefined; //have to default to this in case last item is the one found.
}
