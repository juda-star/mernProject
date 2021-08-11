const Validator = require("Validator");

const isEmpty = require("is-empty");

module.exports = function validateStudentData(data) {
  let errors = {};
  /////////////////////////firstName///////////////////////////////
  data.firstName = isEmpty(data.firstName) ? "" : data.firstName;
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "first name fields is required";
  }
  //////////////////////lastName/////////////////////////////////
  data.lastName = isEmpty(data.lastName) ? "" : data.lastName;
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "last Name fields is required";
  }
  //////////////////////////Email/////////////////////////////////
  data.Email = isEmail(data.Email) ? "" : data.Email;
  if (Validator.isEmail(data.Email)) {
    errors.Email = "Email fields is required @";
  }
  /////////////////////////age///////////////////////////////////
  data.age = isEmpty(data.age) ? 0 : data.age;
  if (Validator.isEmpty(data.age)) {
    errors.firstName = "age fields is required number";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
