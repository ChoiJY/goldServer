var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function (req, res) {
    Student.delete({studentID: 201120937}, function (err, output) {
        res.send(students.find(function (err, data) {
            res.json(output);
        }))
    });
});

module.exports = router;
