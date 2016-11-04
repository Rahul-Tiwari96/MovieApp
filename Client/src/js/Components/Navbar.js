var React=require('react');
var Navbar=React.createClass({
    render:function(){
        return (
            <div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
                <div className="navbar-header">

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                         <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                    </button> <a className="navbar-brand" href="#"> MovieApp </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#"> Home </a>
                        </li>
                        <li>
                            <a href="#"> About </a>
                        </li>
                        <li className="dropdown">
                             <a href="#" className="dropdown-toggle" data-toggle="dropdown"> Actions <strong className="caret"></strong></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#"> Get Favourite Movies </a>
                                </li>
                                <li className="divider">
                                </li>
                                <li>
                                    <a href="#"> Delete </a>
                                </li>
                                <li className="divider">
                                </li>
                                <li>
                                    <a href="#"> Update Movies </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-default">
                            Submit
                        </button>
                    </form>
                    <ul className="nav navbar-nav navbar-right" style={{paddingRight:'20'}}>
                        <li className="dropdown">
                             <a href="#" className="dropdown-toggle" data-toggle="dropdown"> My Account <strong className="caret"></strong></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Login/Sign Up</a>
                                </li>
                                <li>
                                    <a href="#">My Profile</a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    </div>
</div>

            );

        }
    })


    module.exports=Navbar;
