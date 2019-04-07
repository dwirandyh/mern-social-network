const Validator = require("validator");
const IsEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !IsEmpty(data.title) ? data.title : "";
  data.company = !IsEmpty(data.company) ? data.company : "";
  data.from = !IsEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company is invalid";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From field is required";
  }

  return {
    errors,
    isValid: IsEmpty(errors)
  };
};
