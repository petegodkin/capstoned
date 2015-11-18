var async = require('async'),
	keystone = require('keystone');

var SummerMission = keystone.list("SummerMission");

// lists all summer missions
exports.list = function(req, res) {
	var query = SummerMission.model.find();

	// If a category is provided, only match posts related to that category
	if (req.query.category) {
		query.where('categories').in([req.query.category]);
	}
	
	query.exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			summermissions: items
		});
	});
}

// gets a summer missions by it's id
exports.get = function(req, res) {
	SummerMission.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			summermission: item
		});
	});
}
