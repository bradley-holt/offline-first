// Delete a document
var db = new PouchDB("smart-meter");
db.put({
  _id: "2014-11-12T23:27:03.794Z",
  kilowatt_hours: 14
}).then(function() {
  // Get the document
  return db.get("2014-11-12T23:27:03.794Z");
}).then(function(doc) {
  // Remove the document from the database
  return db.remove(doc);
}).then(function() {
  // Try to get the document again
  return db.get("2014-11-12T23:27:03.794Z");
}).then(function(doc) {
  console.log(doc);
}).catch(function(error) {
  console.log(error);
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Database deleted");
});

// Response when trying to get a deleted document
{
  message: "deleted",
  status: 404,
  name: "not_found",
  error: true
}
