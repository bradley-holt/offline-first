// Listen for database changes
var remoteDb = new PouchDB(
  "https://bradley-holt.cloudant.com/smart-meter"
);
var changes = remoteDb.changes({
  since: "now"
}).on("change", function(change) {
  // A document has changed
  console.log(change);
}).on("complete", function(info) {
  // changes() was canceled
  console.log(info);
}).on("error", function(error) {
  // changes() has errored
  console.log(error);
});
// Create several documents
remoteDb.bulkDocs([
  {_id: "2014-11-11T22:35:01.433Z", kilowatt_hours: 11},
  {_id: "2014-11-12T00:43:01.633Z", kilowatt_hours: 13},
  {_id: "2014-11-12T02:42:52.284Z", kilowatt_hours: 14},
  {_id: "2014-11-12T02:46:23.730Z", kilowatt_hours: 16}
]).then(function() {
  // Cancel listening for changes after 3 seconds and delete the database
  setTimeout(function() {
    changes.cancel();
    console.log("Listening for changes cancelled");
    remoteDb.destroy().then(function() {
      console.log('Database destroyed');
    });
  }, 3000);
}).catch(function(error) {
  console.log(error);
});
