// extract file name
// https://www.codewars.com/kata/597770e98b4b340e5b000071/train/javascript

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let firstUnderscore = false;
    let firstDot = false;
    let secondDot = false;
    let returnStr = "";
    for (let i = 0; i < dirtyFileName.length; i++) {
      const c = dirtyFileName[i];
      if (!firstUnderscore) {
        if (c === "_") firstUnderscore = true;
        continue;
      }
      if (firstUnderscore && !firstDot) {
        returnStr += c;
        if (c === ".") {
          firstDot = true;
          continue;
        }
      }
      if (firstDot && !secondDot) {
        if (c === ".") break;
        returnStr += c;
      }
    }
    return returnStr;
  }
}
