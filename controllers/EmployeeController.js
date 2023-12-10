const Employees = require("../models/Users");

const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employees.find();

    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

const createEmployee = async (req, res, next) => {
  try {
    const { firstName, lastName, city } = req.body;

    const employee = await Employees.create({
      firstName,
      lastName,
      city,
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Employee not found");
    }

    const employee = await Employees.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

const removeEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await Employees.findByIdAndDelete({ _id: id });

    res.status(200).json({ message: "Emp deleted", employee });
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  removeEmployee,
};
