/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore');
var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
	// API stuff
	app.get('/api/summermission/list', keystone.middleware.api, routes.api.summermission.list);
    app.get('/api/summermission/:id', keystone.middleware.api, routes.api.summermission.get);
    
    app.get('/api/ministry/list', keystone.middleware.api, routes.api.ministry.list);
    app.get('/api/ministry/:id', keystone.middleware.api, routes.api.ministry.get);
    //app.get('/api/ministry/specialfind/:id', keystone.middleware.api, routes.api.ministry.specialfind);
    app.all('/api/ministry/create', keystone.middleware.api, routes.api.ministry.create); //TODO: remove this
    app.all('/api/ministry/find/',  keystone.middleware.api, routes.api.ministry.find);
    
    app.get('/api/ministryteam/list', keystone.middleware.api, routes.api.ministryteam.list);
    app.get('/api/ministryteam/:id', keystone.middleware.api, routes.api.ministryteam.get);
    
    app.get('/api/campus/list', keystone.middleware.api, routes.api.campus.list);
    app.get('/api/campus/:id', keystone.middleware.api, routes.api.campus.get);
    
    app.get('/api/post/list', keystone.middleware.api, routes.api.post.list);
    app.get('/api/post/:id', keystone.middleware.api, routes.api.post.get);
    
    app.get('/api/postcategory/list', keystone.middleware.api, routes.api.postcategory.list);
    app.get('/api/postcategory/:id', keystone.middleware.api, routes.api.postcategory.get);
    
//    app.get('/api/communitygroup/list', keystone.middleware.api, routes.api.communitygroup.list);
//    app.get('/api/communitygroup/:id', keystone.middleware.api, routes.api.communitygroup.get);
    
    app.get('/api/event/list', keystone.middleware.api, routes.api.event.list);
    app.get('/api/event/:id', keystone.middleware.api, routes.api.event.get);
    
    app.get('/api/gallery/list', keystone.middleware.api, routes.api.gallery.list);
    app.get('/api/gallery/:id', keystone.middleware.api, routes.api.gallery.get);
    
    app.get('/api/user/list', keystone.middleware.api, routes.api.user.list);
    app.get('/api/user/:id', keystone.middleware.api, routes.api.user.get);
    app.all('/api/user/create', keystone.middleware.api, routes.api.user.create); //TODO: not sure about this
};
