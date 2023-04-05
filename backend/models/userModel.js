const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  birthday: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  school: {
    type: String,
    required: false,
  },
  telephone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
});

// static signup method
userSchema.statics.SignUp = async function (
  role,
  firstName,
  middleName,
  lastName,
  birthday,
  address,
  school,
  telephone,
  email,
  password
) {
  // validation
  if (
    !role ||
    !firstName ||
    !birthday ||
    !address ||
    !school ||
    !telephone ||
    !email ||
    !password
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
 
  const user = await this.create({
    role,
    firstName,
    middleName,
    lastName,
    birthday,
    address,
    school,
    telephone,
    email,
    password: hash,
  });
  console.log(
    role,
    firstName,
    middleName,
    lastName,
    birthday,
    address,
    school,
    telephone,
    email,
    hash
  );

  return user;
};

// static login method
userSchema.statics.SignIn = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

// static signup method
userSchema.statics.SignUpAdmin = async function (role, email, password) {
  // validation
  if (!role || !email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Emaillllll not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log("Blalalala",email, password, role, hash);
  const admin = await this.create({ role, email, password: hash });

  return admin;
};

// // static login method
// adminSchema.statics.SignIn = async function (email, password) {
//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }

//   const admin = await this.findOne({ email });
//   if (!admin) {
//     throw Error("Incorrect email");
//   }

//   const match = await bcrypt.compare(password, admin.password);
//   if (!match) {
//     throw Error("Incorrect password");
//   }

//   return admin;
// };
// module.exports = mongoose.model("admin", adminSchema);

module.exports = mongoose.model("User", userSchema);
