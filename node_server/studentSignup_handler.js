const bcrypt = require('bcrypt');

function studentSignupHandler(db, msg, res) {
    if (msg.password != msg.r_password) {
        res.end(JSON.stringify({ result: false, err_msg: "Passwords no match", data: "" }));
        return;
    }
    bcrypt.hash(msg.password, 10, function (err, hash) {
        if (err) {
            res.end(JSON.stringify({ result: false, err_msg: "Hash Error", data: "" }));
            return
        }
        db.connect(function (err) {
            if (err) res.end(JSON.stringify({ result: false, err_msg: "no DB connection", data: "" }));
            let query = "INSERT INTO student (id, name, surname, email, device_id, last_imei_change, password) values ('" + msg.id + "', '" + msg.name + "', '" + msg.surname + "', '" + msg.email + "', '" + msg.device_id + "', '" + msg.last_imei_change + "', '" + hash + "')";
            console.log(query);
            db.query(query, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
        });
    });

}