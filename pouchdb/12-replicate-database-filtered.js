// Replicate a PouchDB database
var db = new PouchDB("smart-meter");
console.log("Local database created");
var remoteDb = new PouchDB(
  "https://bradley-holt.cloudant.com/smart-meter"
);
console.log("Remote database created");
db.bulkDocs([
  {_id: "2014-11-12T23:27:03.794Z", kilowatt_hours: 14},
  {_id: "2014-11-13T00:52:01.471Z", kilowatt_hours: 15},
  {_id: "2014-11-13T01:39:28.911Z", kilowatt_hours: 16},
  {_id: "2014-11-13T02:52:01.471Z", kilowatt_hours: 17}
]).then(function(result) {
  console.log("Documents created");
  db.replicate.to(remoteDb, {
    filter: function(doc) {
      return doc._id >= "2014-11-13T00:00:00.000Z";
    }
  }).on("change", function(info) {
    // Replication has written a new document
    console.log("On change");
    console.log(info);
  }).on("complete", function(info) {
    // Replication has complete or been cancelled
    console.log("On complete");
    console.log(info);
    // Delete the local and remote databases
    return Promise.all([
      db.destroy(),
      remoteDb.destroy()
    ]);
  }).on("paused", function(error) {
    // Replication has paused
    console.log("On paused");
    console.log(error);
  }).on("active", function() {
    // Replication has started actively processing changes
    console.log("On active");
    console.log("active");
  }).on("denied", function(error) {
    // Document failed to replicate
    console.log("On denied");
    console.log(error);
  }).on("error", function(error) {
    // Replication has stopped due to an unrecoverable failure
    console.log("On error");
    console.log(error);
    // Delete the local and remote databases
    return Promise.all([
      db.destroy(),
      remoteDb.destroy()
    ]);
  });
}).then(function() {
  console.log("Local database deleted");
  console.log("Remote database deleted");
}).catch(function(error) {
  console.log(error);
});
