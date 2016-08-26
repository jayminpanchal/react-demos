var React = require("react");
var ReactDOM = require("react-dom");
var Root = require("./component/Root");
var Home = require("./component/Home");

var App = React.createClass({
    render: function () {
        return (
            <Root>
                <Home></Home>
            </Root>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));