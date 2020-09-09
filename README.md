# EmployeeTracker

## TABLE OF CONTENTS
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [Questions](#questions)

## Description
A command-line application that utilized Node and MySQL to manage employees and their roles, departments and salaries. 

## Installation
1. Run `npm install` to install all dependencies (`mysql` and `inquirer`)
2. Run `employees_db.sql` in MySQLWorkbench (or other database management software of your choice)
    * (Optional) Run `db_seeds.sql` in MySQLWorkbench to generate some starting values for each table
3. Edit MySQL connection properties in lines 4-10 of `queries.js`

## Usage
Run `node server.js` in your command line to begin the application. Use arrow keys to navigate menus, and follow prompts on screen to view, add, update, and delete employees, roles, and departments. Select `Quit` at any time to end the application.

## Examples:
The GIF below demonstrates SOME of the application functionality - you can view the [full demo here!](https://drive.google.com/file/d/1EAJ6slscZr9HvSsqW8tEMbyo760m9Qse/view?usp=sharing)

![example](./assets/example.gif)

## Questions?
Please direct all questions to cseibert2667@gmail.com, and be sure to check out my other projects at [cseibert2667](https://www.github.com/cseibert2667).
