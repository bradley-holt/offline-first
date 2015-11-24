// Create a local PouchDB database
var db = new PouchDB("smart-meter");
console.log("Database created");
// Delete the database
db.destroy().then(function() {
  console.log("Database destroyed");
}).catch(function(error) {
  console.log(error);
});
