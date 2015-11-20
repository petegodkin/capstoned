var async = require('async'),
	keystone = require('keystone'),
	restUtils = require('./restUtils');

var MinistryTeam = keystone.list("MinistryTeam");

// lists all ministry teams
exports.list = function(req, res) {
	restUtils.list(MinistryTeam.model, req, res);
}

// get a ministry team by id
exports.get = function(req, res) {
	restUtils.get(MinistryTeam.model, req, res);
}
