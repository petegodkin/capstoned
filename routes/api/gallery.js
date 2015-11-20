var async = require('async'),
	keystone = require('keystone'),
    restUtils = require('./restUtils');

var Gallery = keystone.list("Gallery");

// lists all gallery
exports.list = function(req, res) {
	restUtils.list(Gallery.model, req, res);
}

// gets a gallery by it's id
exports.get = function(req, res) {
	restUtils.get(Gallery.model, req, res);
}
