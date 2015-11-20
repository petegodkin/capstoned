var async = require('async'),
	keystone = require('keystone'),
	restUtils = require('./restUtils');

var PostCategory = keystone.list("PostCategory");

// lists all post categories
exports.list = function(req, res) {
	restUtils.list(PostCategory.model, req, res);
}

// get a post category by id
exports.get = function(req, res) {
	restUtils.get(PostCategory.model, req, res);
}
