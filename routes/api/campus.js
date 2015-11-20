var async = require('async'),
	keystone = require('keystone'),
	restUtils = require('./restUtils');

var Campus = keystone.list("Campus");

// lists all campuses
exports.list = function(req, res) {
	restUtils.list(Campus.model, req, res);
}

// get a campus by id
exports.get = function(req, res) {
	restUtils.get(Campus.model, req, res);
}
