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

function addQueryParam(curString, targetCondition) {
	if (targetCondition != undefined) {
		curString = curString + ", " + targetCondition;
		console.log("added " + curString);
	}
	return curString;
}

// Usage:
//   var data = { 'first name': 'George', 'last name': 'Jetson', 'age': 110 };
//   var querystring = EncodeQueryData(data);
// 
function EncodeQueryData(data)
{
   var ret = [];
   for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
   return ret.join("&");
}

//query for a ministry
exports.specialfind = function(req, res) {
	console.log("url is  " + req.originalUrl +  " 1)" + req.query.condition + " order)" + req.query.order);
	

	var queryStr = req.query.condition;
	var lim = (req.query.limit == undefined) ? 0 : req.query.limit;
	//still need to parse select somehow

	console.log("trying to find " + queryStr);
	console.log(("{ name : \"Destino\" }" === queryStr) + " " + ("{ name : \"Destino\" }" == queryStr));

		var poo = "{ name : \"Destino\" }";

	var query = Ministry.model.find( /*{ name : "Destino" }*/ poo).limit(lim);



	query.exec(function(err, items) {
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			ministries: items
		});
	});
}