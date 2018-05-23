var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var schema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    lat: { type: Number },
    lng: { type: Number },
    userId: { type: String }
});

/*
schema.post('insert', function(location) {
    User.findById(location._id, function (err, user) {
        user.lat = location.lat;
        user.lng = location.lng;
        user.save();
    });
});*/


module.exports = mongoose.model('Location', schema);