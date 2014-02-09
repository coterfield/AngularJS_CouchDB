AngularJS_CouchDB
==============

Simple Web Application about using CouchDB with AngularJS and $http service. It is the source code for a entry in my blog that you can find here: http://wp.me/p15Z8Q-8B

Install CouchDB 1.5.0 or above. Create a database called "dibujo" and add a view with this Map function code that responds to http://127.0.0.1:5984/dibujo/_design/dibujo/_view/todos

function(doc) {
if(doc.e && doc.t)
  emit(doc.t, doc.e);
}

Also allow CORS in CouchDB
