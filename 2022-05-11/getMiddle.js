// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  const sArr = s.split("");
  if(sArr.length %2 === 0) {
    return (sArr[sArr.length/2-1] + sArr[sArr.length/2])
  }
  console.log(`ArrLength ${sArr.length} IsEven ${sArr.length %2 === 0} \n
  EvenMid: ${sArr[sArr.length/2-1] + sArr[sArr.length/2]} OddMid: ${sArr[parseInt(sArr.length/2+1)]}`)
  return sArr[parseInt(sArr.length/2+1)];
}