/*function MakePizza() {
    this.sensitivePizzaInfo = "uwu";
    Object.defineProperty(this, "sensitivePizzaInfo", {
        writable: false,
        enumerable: false,
        configurable: false

    });
}
let aPizza = new MakePizza();

console.log(JSON.stringify(Object.getOwnPropertyDescriptor(aPizza)));
*/
/*
let anObj = {
    xCount: 0,
    oCount: 0,
    areEqual: () => anObj.xCount === anObj.oCount
  }
  //anObj.xCount++;
  console.log(anObj.xCount); // logs 1
  console.log(anObj.oCount); // logs 0
  console.log(anObj.areEqual()); // logs true
  console.log(1 === 0); // logs false
*/
    
//function XO(str) {

    //readable code
    /*
    let splitStr = str.split("");
    let xCount = 0;
    let oCount = 0;
    splitStr.forEach(strChar => {
      if(strChar === 'x' || strChar === 'X') {
        xCount++;
      }
      if(strChar === 'o' || strChar === 'O'){
        oCount++;
      }
    })
    return xCount === oCount;
    */
    
    //obj must contain: equivalence check, counters
    /*
    return str.split("").reduce((accumObj, item) => {
      if(item === 'x' || item ==='X') accumObj.xCount++;
      if(item === 'o' || item ==='O') accumObj.oCount++;
      return accumObj;
    }, {
      xCount: 0,
      oCount: 0,
      areEqual: () => (this.xCount === this.oCount)
    }).areEqual();
    
  }
  */
 /*
  function XO(str) {
    return str
      .split('')
      .reduce(
        (accumObj, item) => {
          if (item === 'x' || item === 'X') accumObj.xCount++;
          if (item === 'o' || item === 'O') accumObj.oCount++;
          return accumObj;
        },
        new (function () {
          this.xCount = 0;
          this.oCount = 0;
          this.areEqual = () => this.xCount === this.oCount;
        })()
      )
      .areEqual();
  }
  console.log(XO('xooo'));
  */
 /*
  function printerError(s) {
    let errorString = s.split("").filter(currChar => currChar.localeCompare("m") > 0 ? true : false);
    return `${errorString.length}/${s.length}`;
  
  }
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");
*/
/*
function count (string) {  
  
  return string
    .split("")
    .reduce((accumObj, currChar) => {
    if(!(currChar in accumObj)) {
         accumObj[currChar] = 0;
       }
   accumObj[currChar]++;
   return accumObj;
         
        },{})
}
console.log(count("aba"));


*/
//https://www.codewars.com/kata/55e2adece53b4cdcb900006c/ 
//bad solution, better to directly convert initial seconds into minutes and hours
//divide the initial seconds into hours truncated using Math.floor(), subtract that value * 3600 from seconds;
//divide the remaining seconds into minutes using Math.floor(), subtract that value * 60 from seconds;
//remaining seconds is correct
/*
function race(v1, v2, g) {
  if(v1 >= v2) return null;
  const decimalHours = g/(v2 -v1);
  let seconds = Math.floor(decimalHours*60**2);
  let minutes = 0;
  let hours = 0;
  while(seconds >= 60) {
    seconds -= 60;
    minutes++;
  }
  while(minutes >= 60) {
    minutes-=60;
    hours++;
  }
  return [hours,minutes,seconds];
  
}
*/

/*
function findUniq(arr) {
    if(arr[0] !== arr[1] && arr[0] !== arr[2]) {
      return arr[0];
    }
    if(arr[1] !== arr[0] && arr[1] !== arr[2]) {
      return arr[1];
    }
    if(arr[0] === arr[1]) {
      const standardVal = arr[0];
      let returnVal;
      for(let i = 1; i < arr.length; i++) {
          if(arr[i] !== standardVal) {
              return arr[i];
          }
      }
    }
  }
//console.log(findUniq([1,0,0]));
//console.log(findUniq([0,1,0]));
//console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
*/
/*
function isValidWalk(walk) {
  //insert brilliant code here
  class Count {
    constructor() {
      this.nCount = 0;
      this.wCount = 0;
      this.eCount = 0;
      this.sCount = 0;
    } 
  }
  if(walk.length === 10) {
    const counts = walk.reduce((counts, char) => {
        if(char === 's') {
          counts.sCount++
        }else if(char === 'w') {
          counts.wCount++;
        }else if(char === 'n') {
          counts.nCount++;
        }else if(char === 'e') {
          counts.eCount++;
        }
        return counts;
      },new Count());
      console.log(counts);
      console.log(counts.nCount === counts.sCount && counts.wCount === counts.eCount);
      if(counts.nCount === counts.sCount && counts.wCount === counts.eCount) {
        return true;
      }
    }else return false;
  // nCount must equal sCount and wCount must equal eCount
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
*/
/*
function isValidWalk(walk) {
  if(walk.length !== 10) return false;
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;
  for(let i = 0; i < walk.length; i++) {
    if(walk[i] === 'n') n++;
    if(walk[i] === 's') s++;
    if(walk[i] === 'w') w++;
    if(walk[i] === 'e') e++;

  }
  if(n === s && w === e) return true;
  return false;
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
*/
/*
function isVowel(char) {
  return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
}
console.log(isVowel('o'));

function getCount(str) {
  var vowelsCount = 0;
  const arr = str.split("");
  for(let element of arr) {
    if(isVowel(element)) vowelsCount++;
  }
  
  return vowelsCount;
}
console.log(getCount('abracadabra'));
*/
console.log(Number.isInteger(12.0));