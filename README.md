# Offline First

This repository contains code examples and snippets of offline-first (and related) tools.

## PouchDB

The `pouchdb` directory contains examples of using [PouchDB](http://pouchdb.com/). Note that each example is self-contained. Meaning, databases (and other resources) set up in each example are also torn down in the same example. Examples include:

1. Creating a Local PouchDB Database
 * [Code Snippet](pouchdb/01-create-local-database.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/bLjyLk4p/)
2. Creating a Remote PouchDB Database
 * [Code Snippet](pouchdb/02-create-remote-database.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/t0k2hbvy/)
3. Creating a New Document
 * [Code Snippet](pouchdb/03-create-document-post.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/9ybkvnqr/)
4. Creating a New Document, Specifying its ID
 * [Code Snippet](pouchdb/04-create-document-put.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/b2ro0jyc/)
5. Updating a Document
 * [Code Snippet](pouchdb/05-update-document.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/8uf9pssu/)
6. Deleting a Document
 * [Code Snippet](pouchdb/06-delete-document.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/421gbegm/)
7. Querying a Database with `allDocs`
 * [Code Snippet](pouchdb/07-query-database-all-docs.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/wkmdzLgL/)
8. Replicating a PouchDB Database
 * [Code Snippet](pouchdb/08-replicate-database.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/2Lrfoamp/)
9. Bidirectionally Replicating a PouchDB Database
 * [Code Snippet](pouchdb/09-replicate-database-bidirectional.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/2zzLrj3f/)
10. Live Replication of a PouchDB Database
 * [Code Snippet](pouchdb/10-replicate-database-live.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/enozjafe/)
11. Listening for Database Changes
 * [Code Snippet](pouchdb/11-database-changes.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/ykgf0xtc/)
12. Filtered Replication of a PouchDB Database
 * [Code Snippet](pouchdb/12-replicate-database-filtered.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/qgngh67x/)
13. Create an Attachment
 * [Code Snippet](pouchdb/13-create-attachment.js)
 * [JSFiddle](https://jsfiddle.net/bradleyholt/n1s0d1yk/)

## Related Boilerplates and Tools

### Frontend Web Apps

* [React Boilerplate with Service Workers](https://github.com/mbrio/react-boilerplate/tree/react-0.13-flummox-service>)

### Backend Web Apps

* [PouchDB npm Package](https://www.npmjs.com/package/pouchdb)
* [PouchDB Server npm Package](https://www.npmjs.com/package/pouchdb-server)

### Mobile Apps

* [PouchDB for Ionic Framework](https://github.com/nolanlawson/pouchdb-ionic)
* ["Hello world" Cordova app with PouchDB](https://github.com/nolanlawson/pouchdb-cordova-hello-world)
* ["Hello world" Cordova app with PouchDB, using the SQLite Plugin](https://github.com/nolanlawson/pouchdb-cordova-hello-world-with-sqlite-plugin)
* [Cloudant FoodTracker (uses Cloudant Sync for iOS)](https://github.com/ibm-cds-labs/cloudant-food-tracker)

### Desktop Apps

* [PouchDB for Electron (formerly Atom Shell)](https://github.com/nolanlawson/pouchdb-electron)
* [PouchDB for Chrome packaged apps](https://github.com/nolanlawson/pouchdb-chrome-app)
* ["Hello world" Chrome app with PouchDB](https://github.com/nolanlawson/pouchdb-chrome-app-hello-world)
* [PouchDB for NW.js (aka Node-Webkit)](https://github.com/nolanlawson/pouchdb-nw)

### Internet of Things (IoT) Apps

* [Node-RED](http://nodered.org/)

## License

Licensed under the [Apache License, Version 2.0](LICENSE.txt).
