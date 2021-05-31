//  this - контекст
console.log(this); // Window

function showThis() {
  console.log(this);
}
showThis(); // Window

function setBonus(bonus, isToDelete) {
  this.bonus = bonus;
  this.isToDelete = isToDelete;
  console.log(this);
}

const student = {
  name: "Anton",
  age: 25,
  addBonus: setBonus,
};

student.addBonus(20, true); // student
console.log(student);

// Потеря контекста

const studentSetBonus = student.addBonus;
studentSetBonus(); // Window

// Как вернуть контекст

// возвращает функцию с установленным контекстом
const studentSetBonusBinded = studentSetBonus.bind(student, 20, true);
studentSetBonusBinded();

// вызывают функцию сразу
studentSetBonus.call(student, 20, true);
studentSetBonus.apply(student, [20, true]);

// Коллбэк в событии
const button = document.querySelectorAll("button");

button.forEach((element) => {
  element.addEventListener("click", function (evt) {
    console.log(this);

    console.log(evt.target === this);
    this.style.background = "pink";
  });
});
