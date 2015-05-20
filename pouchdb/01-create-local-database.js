// Create a local PouchDB database
var db = new PouchDB("smart-meter");
// Delete the database
db.destroy().then(function() {
  console.log("Database created");
}).catch(function(error) {
  console.log(error);
});
