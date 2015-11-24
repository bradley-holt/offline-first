// Update a document
var db = new PouchDB("smart-meter");
console.log("Local database created");
db.put({
  _id: "2014-11-12T23:27:03.794Z",
  kilowatt_hours: 14
}).then(function(response) {
  console.log("Document created");
  // Get the document
  return db.get(response.id);
}).then(function(doc) {
  console.log("Document read");
  // Update the value for kilowatt hours
  doc.kilowatt_hours = 15;
  // Put the document back to the database
  return db.put(doc);
}).then(function(response) {
  console.log("Document updated");
  // Get the document again
  return db.get(response.id);
}).then(function(doc) {
  console.log(doc);
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Local database deleted");
}).catch(function(error) {
  console.log(error);
});
