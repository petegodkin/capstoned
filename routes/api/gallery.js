var async = require('async'),
	keystone = require('keystone');

var Gallery = keystone.list("Gallery");

// lists all gallery
exports.list = function(req, res) {
	var query = Gallery.model.find();
	query.exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			galleries: items
		});
	});
}

// gets a gallery by it's id
exports.get = function(req, res) {
	Gallery.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			gallery: item
		});
	});
}
