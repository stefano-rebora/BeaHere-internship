const bcrypt = require('bcrypt');

//var exports = module.exports = {};

module.exports.professorLogin = function (db, msg, res) {
    //console.log(msg.id);
    //console.log(msg.password);

    if (msg.password.toString().trim() == "" || msg.id.toString().trim() == "") {
        console.log("Empty id / password");
        res.end(JSON.stringify({ result: false, err_msg: "Invalid Login", data: "" }));
        return;
    }

    bcrypt.hash(msg.password, 10, (err, hash) => {
        if (err) {
            res.end(JSON.stringify({ result: false, err_msg: "Hash Error", data: "" }));
            return;
        }

        //console.log(hash);

        let query = "SELECT * FROM professor WHERE id = ? AND password = ?";
        let attributes = [msg.username, hash]; 
        db.query(query, attributes, (err, result, fields) => {
            console.log(query);
            console.log(attributes);
            if (err) {
                console.log(err);
                console.log("DB - Error");
                res.end(JSON.stringify({ result: false, err_msg: "DB error", data: "" }));
            }
        });

    });

}

//module.exports = studentSignUpHandler;
