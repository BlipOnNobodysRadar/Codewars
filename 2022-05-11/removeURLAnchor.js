// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url){
    return url.split('').indexOf('#') === -1 ? url : url.slice(0,url.split('').indexOf('#'));
  }