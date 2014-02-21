//server
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.blogPages = function (req, res) {
    var name = req.params.name;
    console.log(name);
    res.render('partials/blog/' + name);
};


