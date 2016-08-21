var React = require("react");

var Home = React.createClass({
    render: function () {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <h2>{this.props.title} </h2>
                        <hr/>
                        <p>{this.props.description} </p>
                        <button className="btn btn-info" onClick={this.props.sayHello}>
                            Click to call Parent function
                        </button>
                    </div>
                </div>
            </section>
        );
    }
});
module.exports = Home;