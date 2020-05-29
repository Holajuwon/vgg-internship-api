const { body } = require("express-validator");

module.exports = [
  body("firstName")
    .trim(" ")
    .notEmpty()
    .withMessage("Input your first name")
    .isLength({ max: 24 })
    .withMessage("Too long")
    .escape(),
  body("lastName")
    .trim(" ")
    .notEmpty()
    .withMessage("Input your last name")
    .isLength({ max: 24 })
    .withMessage("Too long")
    .escape(),
  body("email")
    .trim(" ")
    .notEmpty()
    .withMessage("Input a user email")
    .isEmail()
    .withMessage("Input correct email address")
    .normalizeEmail({ all_lowercase: true }),
  body("phoneNumber")
    .trim(" ")
    .notEmpty()
    .withMessage("Input a phone number into the phone number field")
    .escape(),
  body("gender")
    .trim(" ")
    .notEmpty()
    .withMessage("Select your gender")
    .isLength({ max: 24 })
    .withMessage("Too long")
    .escape(),
  body("dob")
    .trim(" ")
    .notEmpty()
    .withMessage("Input your date of birth")
    .isLength({ max: 24 })
    .withMessage("Too long")
    .escape(),
  body("track")
    .trim(" ")
    .notEmpty()
    .withMessage("Select your track")
    .isLength({ max: 24 })
    .withMessage("Too long")
    .escape(),
  body("proficiency")
    .trim(" ")
    .notEmpty()
    .withMessage("Select your level of proficiency")
    .isLength({ max: 24 })
    .withMessage("Too long")
    .escape(),
  body("city")
    .trim(" ")
    .notEmpty()
    .withMessage("Input the city you live in.")
    .isLength({ max: 255 })
    .withMessage("Too long")
    .escape(),
  body("state")
    .trim(" ")
    .notEmpty()
    .withMessage("Input the state you live in.")
    .isLength({ max: 255 })
    .withMessage("Too long")
    .escape(),
  body("country")
    .trim(" ")
    .notEmpty()
    .withMessage("Input the country you live in.")
    .isLength({ max: 255 })
    .withMessage("Too long")
    .escape(),
];
