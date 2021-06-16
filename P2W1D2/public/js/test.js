class myArray extends Array {
  constructor() {
    super();
  }
}

console.dir(myArray.__proto__ === Array.prototype.constructor);
console.dir(myArray.prototype);
