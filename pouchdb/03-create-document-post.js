// Create a new document
var db = new PouchDB("smart-meter");
db.post({
  date: "2014-11-12T23:27:03.794Z",
  kilowatt_hours: 14
}).then(function() {
  console.log("Document created");
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Database deleted");
}).catch(function(error) {
  console.log(error);
});
