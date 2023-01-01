// 8 kyu Shifty Closures
var name = "Abe";
var greet_abe = function () {
  return "Hello, " + name + "!";
};

var greet_ben = function () {
  name = "Ben";
  return "Hello, " + name + "!";
};
