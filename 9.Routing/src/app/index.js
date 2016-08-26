var React = require("react");
var ReactDOM = require("react-dom");

var Root = require("./component/Root");
var Home = require("./component/Home");
var User = require("./component/User");
var Aboutus = require("./component/AboutUs");

import {Router, Route, browserHistory} from "react-router";

var App = React.createClass({
    render: function () {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}/>
                <Route path={"home"} component={Home}/>
                <Route path={"user"} component={User}/>
                <Route path={"aboutus"} component={Aboutus}/>
            </Router>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));