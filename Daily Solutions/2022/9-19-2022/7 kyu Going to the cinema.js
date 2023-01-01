// 7 kyu Going to the cinema
function movie(card, ticket, perc) {
  let n = 1;
  let sysACost = sysA(n);
  let sysBCost = sysB(n);
  while (Math.ceil(sysBCost) >= sysACost) {
    n++;
    sysACost = sysA(n);
    sysBCost += sysB(n) - card;
  }
  return n;
  function sysA(n) {
    return ticket * n;
  }
  function sysB(n) {
    return card + ticket * perc ** n;
  }
}
