// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

function stockList(listOfArt, listOfCat){
  
    if(listOfArt.length === 0 || listOfCat.length === 0) return '';
    const anObj = {};
    let returnVals = []
    for(const cat of listOfCat) {
      anObj[cat] = 0;
    };
    for(let val of listOfArt) {
      let category = val.split(' ')[0][0];
      if(anObj[category] != undefined) {
        anObj[category] = anObj[category] + Number(val.split(' ')[1]);
      }
    }
    for(let prop in anObj) {
      returnVals.push(`(${prop} : ${anObj[prop]})`);
    }
    return returnVals.join(' - ');
  }