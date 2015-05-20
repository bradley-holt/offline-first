// Live replicate a PouchDB database
var db = new PouchDB("smart-meter");
var remoteDb = new PouchDB(
  "https://bradley-holt.cloudant.com/smart-meter"
);
Promise.all([
  db.bulkDocs([
    {_id: "2014-11-12T23:27:03.794Z", kilowatt_hours: 14},
    {_id: "2014-11-13T00:52:01.471Z", kilowatt_hours: 15},
    {_id: "2014-11-13T01:39:28.911Z", kilowatt_hours: 16},
    {_id: "2014-11-13T02:52:01.471Z", kilowatt_hours: 17}
  ]),
  remoteDb.bulkDocs([
    {_id: "2014-11-11T22:35:01.433Z", kilowatt_hours: 11},
    {_id: "2014-11-12T00:43:01.633Z", kilowatt_hours: 13},
    {_id: "2014-11-12T02:42:52.284Z", kilowatt_hours: 14},
    {_id: "2014-11-12T02:46:23.730Z", kilowatt_hours: 16}
  ])
]).then(function() {
  var sync = db.sync(remoteDb, {
    live: true,
    retry: true
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
  // Cancel synchronization after 3 seconds
  setTimeout(function() {
    sync.cancel();
    console.log("Synchronization cancelled");
  }, 3000);
}).catch(function(error) {
  console.log(error);
});
