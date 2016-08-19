var React = require("react");

var Home = React.createClass({
    render: function () {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <h2>{this.props.homeTitle} </h2>
                        <hr/>
                        <p>{this.props.homeDescription} </p>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Home;