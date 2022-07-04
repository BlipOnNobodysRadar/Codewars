// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
/// Color ghost
var Ghost = function () {
  this.color = colorPicker();
  function colorPicker() {
    const colors = ["white", "yellow", "purple", "red"];
    return colors[Math.floor(Math.random() * 4)];
  }
};
