// Create a remote PouchDB database
var db = new PouchDB("https://bradley-holt.cloudant.com/smart-meter");
// Delete the database
db.destroy().then(function() {
  console.log("Database deleted");
}).catch(function(error) {
  console.log(error);
});
