const mongoose = require("mongoose");

const employees = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Employees = mongoose.model("employee", employees);
module.exports = Employees;
