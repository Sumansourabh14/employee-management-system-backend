const express = require("express");
const router = express.Router();
const {
  getEmployees,
  createEmployee,
  removeEmployee,
  updateEmployee,
} = require("../controllers/EmployeeController");

router.get("/employees", getEmployees);
router.post("/employee", createEmployee);
router.put("/employee/:id", updateEmployee);
router.delete("/employee/:id", removeEmployee);

module.exports = router;
