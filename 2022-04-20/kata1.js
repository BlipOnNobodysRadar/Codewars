// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
*/

function towerBuilder(nFloors) {
    let startStr = "*"
    let stringLength = (nFloors * 2) -1;
    //string size is 1 + nFloors
    //length is n*2 -1;
    let currentStr = startStr;
    let spacePad = "".padEnd((stringLength - 1)/2, " ");
    let outputString = spacePad + currentStr + spacePad;
    console.log(outputString);
    for(let i = 1; i < nFloors; i++) {
        currentStr = startStr.padEnd(i*2+1,'*');
        spacePad = "".padEnd(((stringLength - 1)/2)-i, ' ');
        outputString = spacePad + currentStr + spacePad;
        console.log(outputString);
    }

    
  }
  towerBuilder(10);