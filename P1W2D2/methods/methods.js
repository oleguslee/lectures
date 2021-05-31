class Student {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  isTyred = false;

  //   static

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge <= 7) {
      console.log("You are too young for js");
    } else {
      this._age = newAge;
    }
  }

  study() {
    this.isTyred = true;
  }
}
