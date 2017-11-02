// database -> test
// collection -> students

var express = require('express');
var router = express.Router();
var student = require('../models/userInfo');

// var people = new student({
//     name: 'asdf',
//     studentID: 201120937
// });
//
// people.save(function (err, people) {
//     if (err) return console.error(err);
//     console.dir(people);
// });

// user list
router.get('/', function (req, res) {
    student.find(function (err, students) {
        res.json(students);
    })
});

router.get('/find/:_id', function (req, res) {
    student.find({studentID:req.params._id},function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
});

// for account delete function
router.get('/delete/:_id', function (req, res) {
    console.log(req.params._id);
    student.remove({studentID:req.params._id}, function (err, output) {
        student.find({studentID:req.params._id},function (err, data) {
            console.log(data);
        });
        res.send('201120937\'s data is removed');
    })
});

// test page
router.get('/inputTest', function (req, res) {
    res.render('index');
});

// update user data such as id, pwd, name, ... from web application
router.post('/inputTest/:_id', function (req, res) {
    var userID = req.body.userID;
    var userName = req.body.userName;
    var newStudent = new student({
        name: userName,
        studentID: userID
    });
    newStudent.save(function (err, newStudent) {
        if (err) return console.error(err);
        console.dir(newStudent);
        res.redirect('../');
    })
});



module.exports = router;
