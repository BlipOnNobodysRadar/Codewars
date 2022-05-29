// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function domainName(url){
    //either between // and . or betweem www. and .
    let str = url;
    str = str.replace('http://','');
    str = str.replace('https://','');
    str = str.replace('www.','');
    
    return str.split('.')[0];
  }
