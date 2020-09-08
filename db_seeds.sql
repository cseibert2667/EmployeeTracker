-- Departments 
INSERT INTO department (name) VALUE ("Sales");
INSERT INTO department (name) VALUE ("Support");
INSERT INTO department (name) VALUE ("Engineering");

-- Roles
INSERT INTO role (title, salary, department_id)
    VALUE ("Sales Lead", 65000, 1);
INSERT INTO role (title, salary, department_id)
    VALUE ("Sales Rep", 55000, 1);
INSERT INTO role (title, salary, department_id)
    VALUE ("Tech Support", 35000, 2);
INSERT INTO role (title, salary, department_id)
    VALUE ("Email Support", 30000, 2);
INSERT INTO role (title, salary, department_id)
    VALUE ("Support Lead", 50000, 2);
INSERT INTO role (title, salary, department_id)
    VALUE ("Lead Engineer", 120000, 3);
INSERT INTO role (title, salary, department_id)
    VALUE ("Software Engineer", 90000, 3);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("John", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("Mike", "Chan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("Ashley", "Rodriguez", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("Tom", "Allen", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("Kevin", "Tupik", 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("Malia", "Brown", 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUE ("Sarah", "Lourd", 4, 4);