// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript
class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}
class Human {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Human {}

class Woman extends Human {}
