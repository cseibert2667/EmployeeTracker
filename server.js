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
  connection.query("SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id", function (err,res){
    if (err) throw err;
    console.table(res);
    mainMenu();
  })
}

function viewRoles() {
  connection.query("SELECT title FROM role", function (err,res){
    if (err) throw err;
    const roles = [];
    res.forEach((role) => roles.push(role.title));
    inquirer.prompt([
      {
        type: "list",
        message: "Which role would you like to view?",
        choices: roles,
        name: "selRole"
      }
    ]).then(function(response){
      connection.query(`SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON role.title = "${response.selRole}" AND e.role_id = role.id INNER JOIN department ON role.department_id = department.id`, function(err,res){
        if (err) throw err;
        console.log(`Showing employees with the ${response.selRole} role:`);
        console.table(res);
        mainMenu();
      })
    })
  })
}

function viewDepts() {
  connection.query("SELECT name FROM department", function (err,res){
    if (err) throw err;
    const depts = [];
    res.forEach((dept) => depts.push(dept.name));
    inquirer.prompt([
      {
        type: "list",
        message: "Which department would you like to view?",
        choices: depts,
        name: "selDept"
      }
    ]).then(function(response){
      connection.query(`SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, " " ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE department.name = "${response.selDept}"`, function(err,res){
        if (err) throw err;
        console.log(`Showing employees in the ${response.selDept} department:`);
        console.table(res);
        mainMenu();
      })
    })
  })
}

function addEmp () {
  connection.query("SELECT title FROM role", function (err,res){
    if (err) throw err;
    const roles = [];
    res.forEach((role) => roles.push(role.title));
    connection.query(`SELECT CONCAT(e.first_name, ' ',e.last_name) AS name FROM employee e`, function(err,res){
    if (err) throw err;
    const mgrs = [];
    res.forEach((mgr) => mgrs.push(mgr.name));
    inquirer.prompt([
      {
        message: "What is the employee's first name?",
        name: "newFN"
      },
      {
        message: "What is the employee's last name?",
        name: "newLN"
      },
      {
        type: "list",
        message: "What role will be assigned to this employee?",
        choices: roles,
        name: "newRole"
      },
      {
        type: "list",
        message: "Who will be this employee's manager?",
        choices: mgrs,
        name: "newMgr"
      }
    ]).then(function(response){
      // TODO: Need to figure out how to get ID for role & mgr -- currently only gets names/titles because that is the only thing we push to the arrays. seems I will need to look into and learn promise-mysql, possibly re-write the function
      connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${response.newFN}", "${response.newLN}", (SELECT id FROM role WHERE role.title = "${response.newRole}"), (SELECT id FROM employee e WHERE CONCAT(e.first_name, ' ',e.last_name) = "${response.newMgr}"))`)
      mainMenu();
    })
  })
})
}

