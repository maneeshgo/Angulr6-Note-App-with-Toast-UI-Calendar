const express = require('express');
const router = express.Router();
const sword = require('sword-core');

router.post('/', function (req, res, next) {
    console.log(req.body);
    let dataSource = req.body.dataSource;
    let params = req.body.params ? JSON.parse(req.body.params) : null;

    if (!dataSource) {
        throw new Error("You should provide a data source.");
    }

    sword.call(req, dataSource, params).then(result => {
        res.send(result);
    });
});

router.get('/', function (req, res, next) {
    console.log(req.body);
    let dataSource = req.body.dataSource;
    let params = req.body.params ? JSON.parse(req.body.params) : null;

    if (!dataSource) {
        throw new Error("You should provide a data source.");
    }

    sword.call(req, dataSource, params).then(result => {
        res.send(result);
    });
});

module.exports = router;
