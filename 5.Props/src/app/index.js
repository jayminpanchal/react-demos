var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./ccomponent/Header");
var Home = require("./ccomponent/Home");

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                        {/*It is a basic Data Passing*/}
                        <Home homeTitle={"Home Page"} homeDescription={"It is a home page."}/>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));