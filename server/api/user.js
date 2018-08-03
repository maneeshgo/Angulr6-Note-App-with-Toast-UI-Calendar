const express = require('express');
const router = express.Router();
const moment = require('moment');
const sword = require('sword-core');

router.get('/', async function (req, res, next) {
    let result = new sword.Response();

    try {
        var authCookie = req.signedCookies['AUTH'];
        if (authCookie && moment(authCookie.expires).isAfter(moment())) {
            result.data = {
                guid: authCookie.guid
                , tc: authCookie.tc
                , gsm: authCookie.gsm
            }
        }
        result.meta.return_code = 0;
    }
    catch (err) {
        result.meta.display_message = err.message;
        // log error
    }

    res.send(result);
});

module.exports = router;
