// IPv4 to int32 (6kyu)
// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/solutions/javascript
function ipToInt32(ip) {
  return ip.split(".").reduce((sum, n) => sum * 256 + Number(n));
}
