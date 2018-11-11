
const fs = require('fs');
const http = require('http');
const mysql = require('mysql');
//const studentSignUp_Handler = require('./studentSignup_handler');

var professor_Handler = require("./professor_Handler.js");
var student_Handler = require("./student_Handler.js");
var database = require("./database.js");

let s = http.createServer(
    (req, res) => {
        console.log(`Request: ${req.method} URL: ${req.url}`)
        if (req.method == 'GET') {
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
                    console.log(msg);
                    switch (msg.req_type) {
                        case "studentLogin":
                            break;
                        case "professorLogin":
                            console.log('professorLogin');
                            professor_Handler.professorLogin(database.db, msg.data, res);
                            break;
                        case "studentSignup":
                            console.log('studentSignUp');
                            student_Handler.studentSignup(database.db, msg.data, res);
                            break;
                        case "studentAttendance":
                            break;
                        default:
                            res.end(JSON.stringify({ result: false, err_msg: "Invalid Request", data: "" }))
                    }


                } catch (err) {

                }
            })
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Helloddddd!');
            res.end();
        }
    })

//let io = require('socket.io').listen(s);

s.listen(8000);
console.log("Server is listening on port 8000");
//console.log(s.address());
