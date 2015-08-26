// Create an attachment
var db = new PouchDB("smart-meter");
var data = "R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";
db.putAttachment("myDoc", "pixel.png", data, "image/gif").then(function() {
  return db.getAttachment("myDoc", "pixel.png");
}).then(function(attachment) {
  console.log(attachment);
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Database deleted");
}).catch(function(error) {
  console.log(error);
});
