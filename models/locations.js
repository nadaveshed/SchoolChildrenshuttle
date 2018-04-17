var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var schema = new Schema({
    _id:  { type: Schema.ObjectId, auto: true },
    lat: { type: Number },
    lng: { type: Number },
    UserId: { type: String }
});

schema.post('insert', (location) => {

});

module.exports = mongoose.model('Location', schema);