var async = require('async'),
	keystone = require('keystone'),
	restUtils = require('./restUtils');

var User = keystone.list("User");

// lists all users
exports.list = function(req, res) {
	restUtils.list(User.model, req, res);
}

// get a user by id
exports.get = function(req, res) {
	restUtils.get(User.model, req, res);
}

//create a user -- TODO: we probably don't want this
exports.create = function(req, res) {
	restUtils.create(User.model, req, res);
}
