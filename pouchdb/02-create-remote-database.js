// Create a remote PouchDB database
var remoteDb = new PouchDB("https://bradley-holt.cloudant.com/smart-meter");
console.log("Remote database created");
remoteDb.info().then(function (info) {
  console.log(info);
  // Delete the database
  return remoteDb.destroy();
}).then(function() {
    console.log("Remote database deleted");
}).catch(function(error) {
  console.log(error);
});
