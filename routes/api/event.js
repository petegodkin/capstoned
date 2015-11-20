var async = require('async'),
	keystone = require('keystone'),
    restUtils = require('./restUtils');

var Event = keystone.list("Event");

// lists all events
exports.list = function(req, res) {
	restUtils.list(Event.model, req, res);
}

// get a event by id
exports.get = function(req, res) {
	restUtils.get(Event.model, req, res);
}
