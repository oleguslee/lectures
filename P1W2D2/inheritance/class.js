// Родитель
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Наследник
class Student extends Person {
  constructor(name, age) {
    super(name, age);
    this.skill = 1;
  }

  isTyred = false;

  study() {
    this.isTyred = true;
  }
}
