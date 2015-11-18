var async = require('async'),
	keystone = require('keystone');

var Campus = keystone.list("Campus");

// lists all campuses
exports.list = function(req, res) {
	var query = Campus.model.find();
	query.exec(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			campuses: items
		});	
	});
}

// get a campus by id
exports.get = function(req, res) {
	Campus.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			campus: item
		});
	});
}
