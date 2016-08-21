var React = require("react");

var ExternalComponent = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center">External Component</h3>
                </div>
            </div>
        );
    }
});

module.exports = ExternalComponent;

