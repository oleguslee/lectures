const obj = {}; // тип данных объект, структура - объект typeof object
const arr = []; // тип данных объект, структура данных - массив, typeof object
function func() {} // тип - объект, структура - объект, typeof function
func.age = 1;
console.log(func.age);

// Функция-конструктор
const WEEKS = 3;

function sleep() {
  console.log("I <3 sleep");
}

function study() {
  if (this.skill % WEEKS) {
    this.skill++;
    this.study();
  } else {
    this.levelUp();
  }
}

function levelUp() {
  this.phase++;
}

// Собственная реализация
function createStudentOld(name, skill = 1, phase = 1) {
  let obj = {};
  obj.name = name;
  obj.skill = skill;
  obj.phase = phase;
  obj.sleep = sleep;
  obj.study = study;
  obj.levelUp = levelUp;
  return obj;
}

// Конструктор
function CreateStudent(name, skill = 1, phase = 1) {
  // create {} (this) происходит неявно
  this.name = name;
  this.skill = skill;
  this.phase = phase;

  // return {} происходит неявно
}

CreateStudent.prototype.study = study;
CreateStudent.prototype.levelUp = levelUp;

// CreateStudent.__proto__ === Function.prototype;
// Function.__proto__ === Object.prototype;
// console.dir(CreateStudent.prototype);


const student1 = new CreateStudent("Anton"); //Экземпляр
// console.log(student1.__proto__ === CreateStudent.prototype);
// console.log(student1 instanceof CreateStudent);
const student2 = new CreateStudent("Oleg"); //Экземпляр
const student3 = new CreateStudent("Ilya"); //Экземпляр

student1.study();
student1.study();

student3.study();
console.log(student1);
console.log(student3);

// Проверить наличие ключа в объекте
console.log("name" in student);

// Перебор ключей
for (let key in student) {
  console.log(student[key]);
}

// Удалить ключ
delete student.sleep;
console.log(student);
