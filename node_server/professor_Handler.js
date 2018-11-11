const bcrypt = require('bcrypt');

module.exports.professorLogin = function (db, msg, res) {

    if (msg.password.toString().trim() == "" || msg.id.toString().trim() == "") {
        console.log("Id and Password cannot be empty");
        res.end(JSON.stringify({ result: false, err_msg: "Invalid Login", data: "" }));
        return;
    }

    bcrypt.hash(msg.password, 10, (err, hash) => {
        if (err) {
            res.end(JSON.stringify({ result: false, err_msg: "Hash Error", data: "" }));
            return;
        }

        let query = "SELECT password FROM professor WHERE id = ?";
        let attributes = [msg.id];
        let stored_hash = '';
        db.query(query, attributes, (err, result, fields) => {
            if (err) {
                console.log("DB - Error");
                res.end(JSON.stringify({ result: false, err_msg: "DB error", data: "" }));
            }
            stored_hash = result[0]['password'];
            console.log(stored_hash);

            bcrypt.compare(msg.password, stored_hash, function(err, res) {
                if (err) {
                    res.end(JSON.stringify({ result: false, err_msg: "Hash Compare Error", data: "" }));
                    return;
                }
                console.log(res); //se true ok login, e quindi...
            });

        });


    });

}
