var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./component/Header");
var Home = require("./component/Home");

var App = React.createClass({
    render: function () {
        let user = {
            name: "ABC",
            mobile: "1234567890",
            email: "abc@gmail.com",
            age: 20
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                        <Home title={"Home Page"} description={"It is a home page."} user={user}>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));