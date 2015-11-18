var async = require('async'),
	keystone = require('keystone');

var MinistryTeam = keystone.list("MinistryTeam");

// lists all ministry teams
exports.list = function(req, res) {
	var query = MinistryTeam.model.find();
	query.exec(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			ministryteams: items
		});	
	});
}

// get a ministry team by id
exports.get = function(req, res) {
	MinistryTeam.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			ministryteam: item
		});
	});
}
