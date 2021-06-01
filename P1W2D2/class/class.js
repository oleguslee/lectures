class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isTyred = false;

  study() {
    this.isTyred = true;
  }
}

const student1 = new Student();
