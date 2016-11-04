var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var movieDetailsSchema = new Schema({
    Title: String,
    Year:String,
    imdbID: String,
    Poster:String
});
movies= mongoose.model('movieDetail' ,movieDetailsSchema);
module.exports = movies;
