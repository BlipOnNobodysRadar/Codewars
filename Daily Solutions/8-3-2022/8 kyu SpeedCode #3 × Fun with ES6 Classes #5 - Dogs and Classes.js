// 8 kyu SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
class Labrador extends Dog {
  constructor(n, a, g, m) {
    super(...arguments);
    this.species = "Labrador";
    this.size = "Large";
    this.loyal = true;
    this.master = m;
  }
}
