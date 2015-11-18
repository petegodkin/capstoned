var async = require('async'),
	keystone = require('keystone');

var Event = keystone.list("Event");

// lists all events
exports.list = function(req, res) {
	var query = Event.model.find();
	query.exec(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			events: items
		});	
	});
}

// get a event by id
exports.get = function(req, res) {
	Event.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			event: item
		});
	});
}
