// server
var data = {
    "posts": [
        {
            "id": "0",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "id": "1",
            "title": "Sed egestas",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        }
    ]
};

// GET

exports.getPosts = function (db) {
    return function(req, res) {

        //  console.log('reading getPosts(): ');
        var posts = [];
        var collection = db.get('usercollection');

        collection.find({},{},function (e, docks) {

            posts.push(docks);
            res.json({
                posts: posts[0]
            });
          //  console.log(posts);
        });
    }};

exports.getPost = function (db) {
    return function (req, res) {
    console.log('reading getPost(): ');
    var id = req.params.id;
    var collection = db.get('usercollection');
       // console.log(id);
    collection.find({ _id : id },{},function (e, docks) {
         console.log(docks);
        res.json({
                post: docks[0]});

        });

   /* } else {
        res.json(false);*/
}};
//We'll continue adding code to this file to handle adding, editing, and deleting posts:
// POST
exports.addPost = function (db) {
    return function(req, res) {
        // Get our form values. These rely on the "name" attributes
        var title = req.body.title;
        var text = req.body.text;

        // Set our collection
        var collection = db.get('usercollection');

        // Submit to the DB
        collection.insert({
            "title" : title,
            "text" : text
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
               // res.location("userlist");
                // And forward to success page
               // res.redirect("userlist");
                res.json(req.body);
            }
        });

    }
    }  ;




// PUT
exports.editPost  = function (db) {
    return function (req, res) {

        var id = req.params.id;
        var collection = db.get('usercollection');

        var title = req.body.title;
        var text = req.body.text;
        console.log('reading editPost(): ');

        collection.update( { _id : id },{text:text, title:title});
        res.json(true);
}};

// DELETE
exports.deletePost = function (db) {
    return function (req, res) {

        console.log('reading deletePost(): ');
        var id = req.params.id;
        var collection = db.get('usercollection');
        collection.remove( { _id : id } );
        res.json(true);

    }
};