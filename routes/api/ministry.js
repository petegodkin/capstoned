var async = require('async'),
	keystone = require('keystone');

var Ministry = keystone.list("Ministry");

// lists all ministries
exports.list = function(req, res) {
	var query = Ministry.model.find();
	query.exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			ministries: items,
			daniels_msg: "poo"
		});
	});
}

// get a ministry by id
exports.get = function(req, res) {
	Ministry.model.findById(req.params.id).exec(function(err, item) {
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			ministry: item
		});
	});
}

//create a ministry -- TODO: get rid of this
exports.create = function(req, res) {
	console.log(req);
	var item = new Ministry.model(),
		data = (req.method == 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			post: item
		});
		
	});
}

//query for a ministry
exports.specialfind = function(req, res) {
	console.log("url is  " + req.originalUrl +  " 1)" + req.query.condition + " order)" + req.query.order + " lim)" + req.query.limit);

	var lim = req.query.limit;
	if (lim == undefined) {
		console.log("haha caught this mother fucker");
	}
	

	var query = Ministry.model.find( { name : "Destino" } );

	//can use query.select('<field name>') to filter

	query.exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			ministries: items
		});
	});
}