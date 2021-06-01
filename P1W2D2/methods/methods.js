class Student {
  #inn = 123;
  constructor(name, age = 20) {
    this.name = name;
    this._age = age;
  }

  isTyred = false;

  static isStudent(item) {
    // return item instanceof Student;
    return this._age;
  }

  get age() {
    return this._age;
  }

  get inn() {
    return this.#inn;
  }

  get fullInfo() {
    return `I am ${this.name}, and I am ${this._age} years old`;
  }

  set age(newAge) {
    if (newAge <= 7) {
      console.log("You are too young for js");
    } else {
      this._age = newAge;
    }
  }

  #showInn() {
    console.log(`My inn is ${this.#inn}`);
  }

  study() {
    this.isTyred = true;
  }
}

const ourStudent = new Student("Олег"); // Экземпляр

// ourStudent.showInn();

// ourStudent.#inn = 234;
console.log(ourStudent.inn);

ourStudent.age = 5;
console.log(ourStudent.fullInfo);
