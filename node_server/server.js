
const fs = require('fs');
const http = require('http');
const mysql = require('mysql');


let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stage"
});




  let s = http.createServer(
    (req, res) => {
        console.log(`Request: ${req.method} URL: ${req.url}`)
        if (req.method == 'GET') {
            console.log('cazzo');
        }
        if (req.method == 'POST') {
            console.log('POST received');
            let data = ''
            req.on('data', chunk => {
                console.log(`Received ${chunk.length} bytes of data.`)
                data += chunk;
            })
            req.on('end', () => {
                console.log('No more data.')
                try {
                    let msg = JSON.parse(data);
                    switch(msg.req_type) {
                        case "studentLogin":

                            break;
                        case "professorLogin":
                            break;
                        case "studentSignup":
                            studentSignupHandler(db, msg.data, res);
                            break;
                        case "studentAttendance":
                            break;
                        default:
                            res.end(JSON.stringify({result: false, err_msg: "Invalid Request", data: ""}))
                    }


                } catch(err) {

                }
            })
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Helloddddd!');
            res.end();
        }
    })

let io = require('socket.io').listen(s);

s.listen(80);
console.log("Server is listening on port 80");