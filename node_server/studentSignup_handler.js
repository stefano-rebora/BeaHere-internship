const bcrypt = require('bcrypt');

var studentSignUpHandler = function studentSignupHandler(db, msg, res) {
    console.log(msg.password+" "+ msg.r_password)

    if (msg.password.toString().trim() === msg.r_password.toString().trim()) {
        console.log("Same Password")
        res.end(JSON.stringify({ result: false, err_msg: "Passwords no match", data: "" }));
        return;
    }

    bcrypt.hash(msg.password, 10, (err, hash) => {
        if (err) {
            res.end(JSON.stringify({ result: false, err_msg: "Hash Error", data: "" }));
            return
        }

        db.getConnection((err) => {
            if (err) res.end(JSON.stringify({ result: false, err_msg: "no DB connection", data: "" }));
            let query = "INSERT INTO student (id, name, surname, email, device_id, last_imei_change, password) values (?,?,?,?,?,?,?)";
            let db_attributes = [msg.id, msg.name, msg.surname, msg.email, msg.device_id, msg.last_imei_change, hash];
            db.query(query, db_attributes, (err, result, fields) => {
                if (err) {
                    console.log("ERROR IN QUERY");
                    res.end(JSON.stringify({ result: false, err_msg: "Query error", data: "" }));
                    
                }
            });
        });
    });

}

module.exports = studentSignUpHandler;