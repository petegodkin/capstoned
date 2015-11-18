var async = require('async'),
	keystone = require('keystone');

var Post = keystone.list("Post");

// lists all posts
exports.list = function(req, res) {
	var query = Post.model.find();
	query.exec(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			posts: items
		});	
	});
}

// get a post by id
exports.get = function(req, res) {
	Post.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			post: item
		});
	});
}
