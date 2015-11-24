// Delete a document
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
  // Remove the document from the database
  return db.remove(doc);
}).then(function(response) {
  console.log("Document deleted");
  // Try to get the document again
  return db.get(response.id);
}).then(function(doc) {
  console.log(doc);
}).catch(function(error) {
  console.log(error);
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Local database deleted");
});

// Response when trying to get a deleted document
{
  message: "deleted",
  status: 404,
  name: "not_found",
  error: true
}
