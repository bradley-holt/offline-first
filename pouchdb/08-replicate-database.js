// Replicate a PouchDB database
var db = new PouchDB("smart-meter");
var remoteDb = new PouchDB(
  "https://bradley-holt.cloudant.com/smart-meter"
);
db.bulkDocs([
  {_id: "2014-11-12T23:27:03.794Z", kilowatt_hours: 14},
  {_id: "2014-11-13T00:52:01.471Z", kilowatt_hours: 15},
  {_id: "2014-11-13T01:39:28.911Z", kilowatt_hours: 16},
  {_id: "2014-11-13T02:52:01.471Z", kilowatt_hours: 17}
]).then(function(result) {
  db.replicate.to(remoteDb, {
    live: false,
    retry: false
  }).on("change", function(info) {
    // Replication has written a new document
    console.log(info);
  }).on("complete", function(info) {
    // Replication has complete or been cancelled
    console.log(info);
    // Delete the local and remote databases
    db.destroy();
    remoteDb.destroy();
  }).on("paused", function(error) {
    // Replication has paused
    console.log(error);
  }).on("active", function() {
    // Replication has started actively processing changes
    console.log("active");
  }).on("denied", function(error) {
    // Document failed to replicate
    console.log(error);
  }).on("error", function(error) {
    // Replication has stopped due to an unrecoverable failure
    console.log(error);
    // Delete the local and remote databases
    db.destroy();
    remoteDb.destroy();
  });
}).catch(function(error) {
  console.log(error);
});
