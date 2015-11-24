// Create a local PouchDB database
var db = new PouchDB("smart-meter");
console.log("Local database created");
// Delete the database
db.destroy().then(function() {
  console.log("Local database deleted");
}).catch(function(error) {
  console.log(error);
});
