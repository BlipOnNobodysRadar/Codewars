// 8 kyu Broken Counter
class Counter {
  constructor() {
    this.value = 0;
  }
  increase() {
    this.value = this.value + 1;
  }
  getValue() {
    return this.value;
  }
  reset() {
    this.value = 0;
  }
}
