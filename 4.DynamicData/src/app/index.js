var React = require("react");
var ReactDOM = require("react-dom");

var App = React.createClass({
    render: function () {
        let i=9;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Basic Dynamic Data</h1>
                        <h4>2+2={2 + 2}</h4>
                        <h2>Ternary Expression</h2>
                        <h4>4 is Even {4 % 2 == 0 ? "Yes" : "No"}</h4>
                        <h4>{i} is Even {i % 2 == 0 ? "Yes" : "No"}</h4>
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