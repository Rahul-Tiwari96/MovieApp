var React = require('react');
var Home = React.createClass({
 render: function(){
   return(
     <div style={{marginTop:'100'}}>

              <input className="col-md-12" type="text" placeholder="Search movie" onChange={this.props.onChange}  />
              <br />
              <br/>
              <input type="button" value="Search" className="pull-right"  onClick={this.props.getData}/>

     </div>
   )
 }
});

module.exports = Home;
