// Родитель
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log("I sleep");
    this.age -= 10;
  }
}

// Наследник
class Student extends Person {
  constructor(name, age = 40) {
    super(name, age);
    this.skill = 1;
  }

  isTired = false;

  study() {
    this.isTired = true;
  }

  sleep() {
    super.sleep();
    this.isTired = false;
  }
}

const ourStudent = new Student();
ourStudent.study();
ourStudent.sleep();
console.log(ourStudent);
