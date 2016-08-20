var React = require("react");

var Home = React.createClass({
        getInitialState: function () {
            return {
                age: this.props.user.age
            };
        },
        increaseAge: function () {
            this.setState({
                age: this.state.age + 3
            });
        },
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
                            <p>Age:{this.state.age}</p>
                            <br/>
                            <button className="btn btn-info" onClick={this.increaseAge}>Click Me!</button>
                        </div>
                    </div>
                </section>
            );
        }
    })
    ;
module.exports = Home;