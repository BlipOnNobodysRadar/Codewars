// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
function incrementString (strng) {
    // return incrementedString
    console.log(`String: ${strng} ${strng.match(/\d+/)}`);
    const nums = '0123456789'.split('');
    for(const numChar in nums) {
      if(strng.endsWith(numChar)) {
        let tailString =  '' + strng.match(/\d+/)
        let length = tailString.length;
        console.log(`tailString: ${tailString} length: ${length}`)
        let numFrom = parseInt(tailString) + 1;
        tailString = '' + numFrom.toString().padStart(tailString.length, '0');
        console.log(`numFrom: ${numFrom}, new tailString ${tailString}`);
        return strng.slice(0,strng.length-length) + tailString;
      }
    }
    return strng + 1;
  }