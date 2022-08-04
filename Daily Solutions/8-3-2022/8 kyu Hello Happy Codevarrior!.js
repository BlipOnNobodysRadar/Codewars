// 8 kyu Hello Happy Codevarrior!
class Warrior {
  constructor(n) {
    this.n = n;
  }

  name(n = this.n) {
    this.n = n;
    return this.n;
  }
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name();
};
