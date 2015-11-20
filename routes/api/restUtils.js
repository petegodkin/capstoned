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
    }
}