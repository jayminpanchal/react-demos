var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./component/Header");
var Home = require("./component/Home");

var App = React.createClass({
    sayHello: function () {
        alert("Parent Called");
    },
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                        <Home title={"Home Page"} description={"It is a home page."} sayHello={this.sayHello}>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));