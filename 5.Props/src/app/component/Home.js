var React = require("react");

var Home = React.createClass({
    clickMe: function () {
        alert("Button Clicked!!");
    },
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
                        <h4>Hobbies</h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>
                        <button className="btn btn-info" onClick={this.clickMe}>Click Me!</button>
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
Home.propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    user: React.PropTypes.object
};
module.exports = Home;