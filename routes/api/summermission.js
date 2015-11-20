var async = require('async'),
	keystone = require('keystone'),
	restUtils = require('./restUtils');

var SummerMission = keystone.list("SummerMission");

// lists all summer missions
exports.list = function(req, res) {
	restUtils.list(SummerMission.model, req, res);
}

// gets a summer missions by it's id
exports.get = function(req, res) {
	restUtils.get(SummerMission.model, req, res);
}
