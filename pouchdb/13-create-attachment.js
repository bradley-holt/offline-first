// Create an attachment
var db = new PouchDB("smart-meter");
console.log("Local database created");
var data = "R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";
db.putAttachment("myDoc", "pixel.gif", data, "image/gif").then(function() {
  console.log("Attachment created");
  return db.getAttachment("myDoc", "pixel.gif");
}).then(function(attachment) {
  console.log("Attachment read");
  console.log(attachment);
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Database deleted");
}).catch(function(error) {
  console.log(error);
});
