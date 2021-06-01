// Родитель
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Наследник
function Student(name, age) {
  Person.call(this, name, age);
  this.skill = 1;
  this.isTired = false;
}

Student.prototype.study = function () {
  this.isTired = true;
};

Object.setPrototypeOf(Student.prototype, Person.prototype);
