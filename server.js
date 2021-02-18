"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    path        = require('path'),
    http        = require('http')
const app = express()
const server = http.createServer(app);
const port = process.env.PORT || 8080;


let middleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
}

app.enable('trust proxy')

app.use(function (req, res, next) {
    if (req.secure || req.host == 'localhost') {
        // request was via https, so do no special handling
        next();
    } else {
        // request was via http, so redirect to https
        throw new Error(`You are trying to access an unsafe URL. Try using https: to validate your call!`)
    }
});


(async () => {
    try {

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());



        app.use(express.static(__dirname + '/dist'))

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, './dist', '/'), (error) => {
                if (error) {
                    console.log(error)
                }
            })
        }
        )

        server.listen(port, async (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Running on :' + port)
            }
        })
    }
    catch (e) {
        console.log(e)
    }
})();







