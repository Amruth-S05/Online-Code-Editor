const express = require("express");
const cors = require("cors");
const {exec} = require('child_process');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const PORT = 3001;

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send({"name": "Online-Code-Editor"});
});

app.get("/favicon.ico", (req, res) => res.send(204));

app.post("/execute", (req, res) => {
    console.log(req.body);
    const post_data = {
        "clientId": "1131d8202307718b7ca2aa5c837ad2eb",
        "clientSecret": "f345b7f43e809ae2ea75b27bc4e351b6555865470d4010c5d1d1189221d5e45b",
        "stdin": req.body.stdin,
        "script": req.body.script,
        "language": req.body.language,
        "versionIndex": req.body.versionId,
    };

    const curl_cmd_exe = `curl -d '${JSON.stringify(post_data)}' -H "Content-Type: application/json" -X "POST" https://api.jdoodle.com/v1/execute`;

    exec(curl_cmd_exe, (error, stdout, stderr) => {
        if (error){
            console.log("Error:", error);
            res.send(error);
        }
        else{
            console.log(stdout);
            res.send(stdout);
        }
    });
});

app.get("/usage", (req, res) => {
    const curl_cmd_usage = `curl -d '{"clientId": "1131d8202307718b7ca2aa5c837ad2eb", "clientSecret": "f345b7f43e809ae2ea75b27bc4e351b6555865470d4010c5d1d1189221d5e45b"}' -H "Content-Type: application/json" -X "POST" https://api.jdoodle.com/v1/credit-spent`;
    exec(curl_cmd_usage, (error, stdout, stderr) => {
        res.send(stdout);
    });
});