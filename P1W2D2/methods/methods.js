class Student {
  #inn = 123;
  constructor(name, age = 20) {
    this.name = name;
    this._age = age;
  }

  isTyred = false;

  static isStudent(item) {
    return item instanceof Student;
  }

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
  
  get inn() {
    return this.#inn;
  }

  get fullInfo() {
    return `I am ${this.name}, and I am ${this._age} years old`;
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
