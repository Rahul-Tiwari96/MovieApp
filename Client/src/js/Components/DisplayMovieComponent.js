var React= require('react');
var MovieBox = require('./MovieBox');

var DisplayMovieComponent = React.createClass({
 render: function(){
   var temp = this.props.MovieArr.map(function(arr) {
     return < MovieBox MovieArray={arr} />
 });
 return (
        <div>
          {temp}
        </div>
      )
    }
});

module.exports = DisplayMovieComponent;
