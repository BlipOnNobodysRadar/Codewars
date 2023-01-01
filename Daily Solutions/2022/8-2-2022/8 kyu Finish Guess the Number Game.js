// 8 kyu Finish Guess the Number Game
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives < 1) throw "Ded";
    if (n === this.number) return true;
    this.lives = this.lives - 1;
    return false;
  }
}
