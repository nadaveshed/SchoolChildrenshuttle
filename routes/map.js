let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

const Location = require("../models/locations");

let socket = null;

/**
 * @param req.body = {lat, lng, userId}
 */
router.post('/sendLocation/', (req, res, next) => {
    // let loc  = req.body;/
    console.log({
        lat: req.body.lat,
        lng :req.body.lng
    })

    //מה לגבי לשמור את המשתמש ששלח לך את המיקום?
    // let loc = new (req.body);
    let loc = {
        lat: req.body.lat,
        lng: req.body.lng,
        userId: req.body.userId
    }
    console.log(loc)
    loc.save(function(err, doc) {
        console.log(doc);
        if (doc){
            console.log(socket)
            if(socket)
                socket.emit("send-location", doc);
            res.status(200).json({"a":"a"});
        }
        if (err){
            console.log(err)
            res.status(401).json();
        }

    });
});

module.exports = router;
module.exports.setSocket = function setSocket(s){socket = s;};
/**
 * router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

 */