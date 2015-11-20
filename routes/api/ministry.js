var async = require('async'),
	keystone = require('keystone'),
	restUtils = require('./restUtils');

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

// comment
exports.find = function(req, res) {
	restUtils.find(Ministry.model, req, res);
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
/*exports.specialfind = function(req, res) {
	console.log("url is  " + req.originalUrl +  " 1)" + req.query.condition + " order)" + req.query.order);
	
	var keywords = ["order", "select", "limit"];

	//specifically bound conditions that we should filter out
	var lim = (req.query.limit == undefined) ? 0 : req.query.limit;
	var order = (req.query.order == undefined) ? null : req.query.order;

	//still need to parse select somehow

	var filters = [];
	for (var property in req.query) {
    	if (req.query.hasOwnProperty(property) && property != keywords[0] && property != keywords[1] && property != keywords[2]) {
        	console.log("checking property" + property, req.query[property]);
        	if (req.query[property] != null) {
        		filters.push({field : property, val : req.query[property]});
        	}
    	}
	}

	//get all and then filter after.... this seems inefficient
	var query = Ministry.model.find().limit(lim).sort(order);

	//filter the query
	for (var iter = 0; iter < filters.length; iter++) {
		query.where(filters[iter].field).equals(filters[iter].val);
	}

	// for (var property in req.query) {
 //    	if (req.query.hasOwnProperty(property) && property != keywords[0] && property != keywords[1] && property != keywords[2]) {
 //        	console.log("checking property" + property, req.query[property]);
 //        	if (req.query[propery] != null) {
 //        		query.where(property).equals(req.query[property]);
 //        	}
 //    	}
	// }


	query.exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			ministries: items
		});
	});

}*/

