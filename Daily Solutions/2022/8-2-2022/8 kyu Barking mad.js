// 8 kyu Barking mad
function Dog(breed) {
  this.breed = breed;
  this.bark = () => "Woof";
}

var snoopy = new Dog("Beagle");

snoopy.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
