// Update a document
var db = new PouchDB("smart-meter");
db.put({
  _id: "2014-11-12T23:27:03.794Z",
  kilowatt_hours: 14
}).then(function() {
  return db.get("2014-11-12T23:27:03.794Z");
}).then(function(doc) {
  // Update the value for kilowatt hours
  doc.kilowatt_hours = 15;
  // Put the document back to the database
  return db.put(doc);
}).then(function(doc) {
  // Get the document again
  return db.get("2014-11-12T23:27:03.794Z");
}).then(function(doc) {
  console.log(doc);
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Database deleted");
}).catch(function(error) {
  console.log(error);
});
