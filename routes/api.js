//server
// POST
exports.addContact = function (db) {
    return function(req, res) {
        // Get our form values. These rely on the "name" attributes
        var firstname = req.body.firstname;
        var email = req.body.emailaddress;

        console.log('reading addContact(): ');
        // Set our collection
        var collection = db.get('contactscollection');

        // Submit to the DB
        collection.insert({
            "firstname" : firstname,
            "email" : email
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {

                res.json(req.body);
            }
        });

    }
}  ;