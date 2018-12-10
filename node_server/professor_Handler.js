const bcrypt = require('bcrypt');

module.exports.professorLogin = function (db, msg, res) {

    console.log(msg.id);
    console.log(msg.password);

    if (msg.password.toString().trim() == "" || msg.id.toString().trim() == "") {
        console.log("Id and Password cannot be empty");
        res.end(JSON.stringify({ result: false, err_msg: "Invalid Login", data: "" }));
        return;
    }

    //bcrypt.hash(msg.password, 10, (err, hash) => {

      //  if (err) {
        //    res.end(JSON.stringify({ result: false, err_msg: "Hash Error", data: "" }));
          //  return;
        //}

    let query = "SELECT password FROM professor WHERE id = ?";
        //let query = "INSERT INTO professor (id, name, surname, email, password) VALUES (?,?,?,?,?);"
    let attributes = [msg.id];
        //let attributes = [msg.id, "prova8", "prova8", "provamail", hash];

    db.query(query, attributes, (err, result, fields) => {

        console.log("query: " + query);
        console.log("Attributes: " + attributes); 
        console.log("result: " + result[0]);
        console.log("fields: " + fields);

        return;

        if (err) {
            console.log("DB - Error");
            res.end(JSON.stringify({ result: false, err_msg: "DB Error", data: "" }));
        }

        stored_hash = result[0]['password'];

        //if res vuoto....

        bcrypt.compare(msg.password, stored_hash, function(err, res) {

            if (err) {
                res.end(JSON.stringify({ result: false, err_msg: "Hash Compare Error", data: "" }));
                return;
            }

                //funzione per confronto con pwd generate in PHP
/*                 bcrypt.compare(msg.password, stored_hash.replace(/^\$2y(.+)$/i, '\$2a$1'), function(err, result) {
                    if (err) {
                        res.end(JSON.stringify({ result: false, err_msg: "Hash Compare Error", data: "" }));
                        return;
                    } */
            console.log(res);
        });
                //console.log(res); //se true ok login, e quindi...
    });
   // });
    //console.log(res);

}
