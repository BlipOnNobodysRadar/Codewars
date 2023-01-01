// Grasshopper - Create the rooms (8kyu)
// https://www.codewars.com/kata/56a29b237e9e997ff2000048/train/javascript

// Add rooms here
class Room {
  constructor(name = "", description = "", completed = false) {
    this.name = name;
    this.description = description;
    this.completed = completed;
  }
}
var rooms = {
  room1: new Room("room1", "yep"),
  room2: new Room(),
  room3: new Room("room3", "nope"),
};
