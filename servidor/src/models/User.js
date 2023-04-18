const { Schema, model } = require("mongoose");

const bcrypt = require('bcrypt');
const UserSchema = new Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
UserSchema.methods.comparePassword = function(password) {
  return this.password === password;
};

module.exports = model("User", UserSchema);
