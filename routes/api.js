//server
// POST
exports.addContact = function (db,SMTPTransport) {
    return function(req, res) {
        // Get our form values. These rely on the "name" attributes
        var firstname = req.body.firstname;
        var email = req.body.emailaddress;

        console.log('reading addContact(): ');


        var mailOptions = {
            from: firstname + " ✔ <"+email+">", // sender address
            to: "johnyno@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world ✔", // plaintext body
            html: "<b>Hello world ✔</b>" // html body
        }


        SMTPTransport.sendMail(mailOptions, function(error, responce){
            if(error){
                console.log(error);
                res.json(false);
            }else{
                console.log("Message sent: " + responce.message);
                res.json(true);
            }

            // if you don't want to use this transport object anymore, uncomment following line
            //smtpTransport.close(); // shut down the connection pool, no more messages
        });


        // Set our collection
        /*var collection = db.get('contactscollection');

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
*/


    }
}  ;