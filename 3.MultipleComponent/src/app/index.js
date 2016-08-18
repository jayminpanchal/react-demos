var React = require("react");
var ReactDOM = require("react-dom");

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <InlineComponent/>
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
                    <h3>Inline Component</h3>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));