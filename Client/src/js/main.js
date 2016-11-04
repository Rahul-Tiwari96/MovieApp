 var React= require('react');
var ReactDOM = require('react-dom');
var MovieBox = require('./components/MovieBox.js');
var Home = require('./components/Home.js');
var Navbar = require('./components/Navbar.js');
var DisplayMovieComponent = require('./components/DisplayMovieComponent.js');


var MainComponent = React.createClass({

  getInitialState: function(){
        return {
            inputValue: '',
            MovieArr:[]
        };
    },
      onChange: function(e){
     this.setState({ inputValue: e.target.value });
        console.log(e.target.value);
},
getData: function()
{
  $.ajax({
 url:"http://www.omdbapi.com/?s="+this.state.inputValue,
 type:'GET',
 dataType:'JSON',
 success:function(data){
   this.setState({MovieArr:data.Search});
console.log(data);
  }.bind(this),
 error: function(err)
 {
   console.log(err);

 }.bind(this)

});
},

render: function(){

  return(
<div>
   <Home  onChange={this.onChange} getData={this.getData}/>
   <DisplayMovieComponent MovieArr={this.state.MovieArr}/>
   <Navbar />
      </div>
  )
}
});
ReactDOM.render(<MainComponent/>,document.getElementById("app"));
