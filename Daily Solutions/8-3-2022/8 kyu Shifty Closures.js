// 8 kyu Shifty Closures
var name = "Abe";
var greet_abe = function () {
  return "Hello, " + name + "!";
};
name = "Ben";
var greet_ben = function () {
  return "Hello, " + name + "!";
};
