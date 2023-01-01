// 8 kyu Lexical this
var Person = function () {
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends = f;
    },
  };
  return person;
};
