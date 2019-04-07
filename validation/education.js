const Validator = require("validator");
const IsEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !IsEmpty(data.school) ? data.school : "";
  data.degree = !IsEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !IsEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !IsEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree is invalid";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study is invalid";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From field is required";
  }

  return {
    errors,
    isValid: IsEmpty(errors)
  };
};
