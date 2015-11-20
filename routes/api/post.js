var async = require('async'),
	keystone = require('keystone'),
	restUtils = require('./restUtils');

var Post = keystone.list("Post");

// lists all posts
exports.list = function(req, res) {
	restUtils.list(Post.model, req, res);
}

// get a post by id
exports.get = function(req, res) {
	restUtils.get(Post.model, req, res);
}
