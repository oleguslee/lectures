function Person(isTired) {
  this.iq = 180;
  this.isTired = isTired;
}

Person.prototype.chill = function () {
  this.isTired = false;
};

function Student(isTired) {
  Person.call(this, isTired);
  this.age = 23;
}

// Два варианта навледования

// 1. Заменить прототип на новый объект (!Важно: не забыть восстановить конструктор и методы)
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

Student.prototype.study = function () {
  this.isTired = true;
};

// 2
// Object.setPrototypeOf(Student.prototype, Person.prototype);

const student1 = new Student(true);
console.log(student1);
