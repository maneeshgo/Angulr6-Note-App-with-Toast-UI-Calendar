var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var sword = require('sword-core');
var swordConfig = require('./sword-core.json');
var cookieParser = require('cookie-parser');
var cookieEncrypter = require('cookie-encrypter');
var moment = require('moment');
var uuid = require('uuid/v1');
var secretKey = '1570CD6021558001D3135CA396FF52DF';
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser(secretKey));
app.use(cookieEncrypter(secretKey));
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/email', express.static(path.join(__dirname, '../email')));
//app.use(sword.init(swordConfig));

app.use(function (req, res, next) {
    var authCookie = req.signedCookies['AUTH'];

    req.contextParams.dispatcher_params = req.contextParams.dispatcher_params || {};

    if (authCookie && moment(authCookie.expires).isAfter(moment())) {
        req.contextParams.dispatcher_params.auth_guid = authCookie.guid;
    }

    req.contextParams.dispatcher_params.anon_guid = uuid();
    req.contextParams.dispatcher_params.tran_guid = uuid();

    next();
});

app.get('/', (req, res) => {
    res.redirect('/index.html');
})

//app.use('/api/default', require('./api/default'));
//app.use('/api/user', require('./api/user'));

module.exports = app;
