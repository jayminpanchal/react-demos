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
                        <br/>
                        <h3>User Details:</h3>
                        <hr/>
                        <p>User Name:{this.props.user.name}, Email: {this.props.user.name}, Mobile
                            No: {this.props.user.mobile} </p>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
});
module.exports = Home;