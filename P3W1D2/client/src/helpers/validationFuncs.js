function validateName(value) {
  return !/\d/g.test(value);
}

export {validateName}