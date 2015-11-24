// Query a database with allDocs
var db = new PouchDB("smart-meter");
console.log("Local database created");
db.bulkDocs([
  {_id: "2014-11-12T23:27:03.794Z", kilowatt_hours: 14},
  {_id: "2014-11-13T00:52:01.471Z", kilowatt_hours: 15},
  {_id: "2014-11-13T01:39:28.911Z", kilowatt_hours: 16},
  {_id: "2014-11-13T02:52:01.471Z", kilowatt_hours: 17}
]).then(function(result) {
  console.log("Documents created");
  // Get all documents
  return db.allDocs({include_docs: true});
}).then(function(response) {
  console.log("Documents read");
  console.log(response);
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Local database deleted");
}).catch(function(error) {
  console.log(error);
});
