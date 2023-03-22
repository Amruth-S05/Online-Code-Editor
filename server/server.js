const express = require("express");
const cors = require("cors");
const {exec} = require('child_process');
const request = require("request");

const app = express();

const clientId = "1131d8202307718b7ca2aa5c837ad2eb";
const clientSecret = "f345b7f43e809ae2ea75b27bc4e351b6555865470d4010c5d1d1189221d5e45b";

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
        clientId: clientId,
        clientSecret: clientSecret,
        stdin: req.body.stdin,
        script: req.body.script,
        language: req.body.language,
        versionIndex: req.body.versionId,
    };

    request({
        url: "https://api.jdoodle.com/v1/execute",
        method: "POST",
        json: post_data
    },(error, response, body) => {
        console.log("Error: ", error);
        console.log("Response: ", response);
        console.log("Body: ", body);
        res.send(body);
    });
});

app.get("/usage", (req, res) => {
    request({
        url: "https://api.jdoodle.com/v1/credit-spent",
        method: "POST",
        json: {
            clientId: clientId,
            clientSecret: clientSecret,
        }
    }, (error, request, body) => {
        const remainingCredits = 200 - body.used;
        res.send({used: body.used, remaining: remainingCredits})
    });
});