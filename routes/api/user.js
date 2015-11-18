var async = require('async'),
	keystone = require('keystone');

var User = keystone.list("User");

// lists all users
exports.list = function(req, res) {
	var query = User.model.find();
	query.exec(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			users: items
		});	
	});
}

// get a user by id
exports.get = function(req, res) {
	User.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			user: item
		});
	});
}

//create a user -- TODO: we probably don't want this
exports.create = function(req, res) {
	
	var item = new User.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	console.log(data);
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			post: item
		});
		
	});
}
