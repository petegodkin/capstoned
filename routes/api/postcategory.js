var async = require('async'),
	keystone = require('keystone');

var PostCategory = keystone.list("PostCategory");

// lists all post categories
exports.list = function(req, res) {
	var query = PostCategory.model.find();
	query.exec(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			postcategories: items
		});	
	});
}

// get a post category by id
exports.get = function(req, res) {
	PostCategory.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			postcategory: item
		});
	});
}
