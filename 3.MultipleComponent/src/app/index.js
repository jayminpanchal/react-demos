var React = require("react");
var ReactDOM = require("react-dom");
var ExternalComponent = require("./ccomponent/ExternalComponent");
var Header = require("./ccomponent/Header");
var Home = require("./ccomponent/Home");

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                        <Home/>
                        {/*<InlineComponent/>
                         <ExternalComponent/>*/}
                    </div>
                </div>
            </div>
        );
    }
});

var InlineComponent = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center">Inline Component</h3>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));