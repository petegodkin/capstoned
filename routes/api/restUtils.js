module.exports = {
    // used for queries
    find : function(model, req, res) {
        var data = (req.method == 'POST') ? req.body : req.query;

        // default 0 means no limit
        var lim = req.query.limit ? req.query.limit : 0;

        model.find(data).limit(lim).exec(function(err, items) {
            if (err) return res.apiError('database error', err);
            if (!items) return res.apiError('not found');

            res.apiResponse(items);
        });
    },

    // used to get everything from a collection
    list : function(model, req, res) {
        var query = model.find();
        query.exec(function(err, items) {
            if (err) return res.apiError('database error', err);

            res.apiResponse(items);
        });
    },

    // gets something by it's id
    get : function(model, req, res) {
    	model.findById(req.params.id).exec(function(err, item) {
    		if (err) return res.apiError('database error', err);
    		if (!item) return res.apiError('not found');

    		res.apiResponse(item);
    	});
    },

    //creates something... such description!
    create : function(model, req, res) {
    	var item = new model,
    		data = (req.method == 'POST') ? req.body : req.query;

    	item.getUpdateHandler(req).process(data, function(err) {
    		if (err) return res.apiError('error', err);

    		res.apiResponse({
    			post: item
    		});
    	});
    }
}