//var async = require('async'),
//	keystone = require('keystone');
//
//var CommunityGroup = keystone.list("CommunityGroup");
//
//// lists all community groups
//exports.list = function(req, res) {
//	var query = CommunityGroup.model.find();
//	query.exec(function(err, items) {
//		
//		if (err) return res.apiError('database error', err);
//		
//		res.apiResponse({
//			communitygroups: items
//		});	
//	});
//}
//
//// get a community group by id
//exports.get = function(req, res) {
//	CommunityGroup.model.findById(req.params.id).exec(function(err, item) {
//		
//		if (err) return res.apiError('database error', err);
//		if (!item) return res.apiError('not found');
//		
//		res.apiResponse({
//			communitygroup: item
//		});
//	});
//}
