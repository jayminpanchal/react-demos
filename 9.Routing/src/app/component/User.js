var React = require("react");

var User = React.createClass({
    render: function () {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <h1>User Page</h1>
                        <p>User ID: {this.props.params.id}</p>
                        <p>User Name: {this.props.params.name}</p>
                    </div>
                </div>
            </section>
        );
    }
});
module.exports = User;