const queries = require("./queries")

queries.connection.connect(function (err) {
  if (err) throw err;
  queries.mainMenu();
});