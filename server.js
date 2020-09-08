const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employees_db",
  });

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected Successfully");
    mainMenu();
});

function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["View All Employees", "View All Employees by Role", "View All Employees by Department", "Add Employee", "Add Role", "Add Department", "Update Employee Role", "Quit"],
      name: "menuOption"
    }
  ]).then(function(response){
    switch (response.menuOption) {
      case "View All Employees":
        viewEmps();
        break;
      case "View All Employees by Role":
        viewRoles();
        break;
      case "View All Employees by Department":
        viewDepts();
        break;
      case "Add Employee":
        addEmp();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Department":
        addDept();
        break;
      case "Update Employee Role":
        updateRole();
        break;
      case "Quit":
        connection.end();
    }
  })
}

function viewEmps() {
  connection.query("")
}