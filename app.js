
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  blogAPI = require('./routes/blogAPI'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


// New Code
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodemain');

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};



/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/partials/blog/:name', routes.blogPages);


// JSON API
app.get('/blogAPI/posts', blogAPI.getPosts(db));
app.get('/blogAPI/post/:id', blogAPI.getPost(db));
app.post('/blogAPI/post', blogAPI.addPost(db));
app.put('/blogAPI/post/:id', blogAPI.editPost(db));
app.delete('/blogAPI/delete/:id', blogAPI.deletePost(db));


app.post('/api/contact', api.addContact(db));

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
