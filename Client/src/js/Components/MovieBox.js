var React= require('react');
var MovieBox = React.createClass({
 addToDB:function(){
   var myObj=this.props.MovieArray;
   console.log(myObj);
 $.ajax({
    url:"http://localhost:8080/movie/movieAdd",
    type:'POST',
    dataType:'JSON',
    data:myObj,
    success:function(data){
       console.log(data);
    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
},
 render:function(){
   var link = "http://www.imdb.com/title/"+this.props.MovieArray.imdbID;
   return(
     <div className="container">
   <div className="row">
     <div className="col-md-6" id="left">
     <br/>
         <img  src={this.props.MovieArray.Poster} id="imgheight"/>
     </div>
   <div className="col-md-6" id="right">
   <br/>
    <h3>{this.props.MovieArray.Title}</h3>
    <h3>{this.props.MovieArray.Year}</h3>
    <h3>{this.props.MovieArray.Type}</h3>
    <p><a href={link} className="btn btn-primary" target="_blank">View on IMDb </a><span>&nbsp;&emsp;</span>
             <button  className="btn btn-warning" onClick={this.addToDB} >Add as Favorite</button></p>
    </div>
    </div>
    </div>
   )
 }
});
module.exports = MovieBox;
