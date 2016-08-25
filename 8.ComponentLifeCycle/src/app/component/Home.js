var React = require("react");

var Home = React.createClass({
    componentWillMount: function () {
        console.log("Component Will Mount");
    },
    componentDidMount: function () {
        console.log("Component did mount!!");
    },
    componentWillReceiveProps: function (nextProps) {
        console.log("Component will receiveprops", nextProps);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log("should Component update", nextProps, nextState);
        return true;
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    },
    componentWillUnmount: function () {
        console.log("Component will unmount");
    },
    render: function () {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <h2>{this.props.title} </h2>
                        <hr/>
                        <p>{this.props.description} </p>
                    </div>
                </div>
            </section>
        );
    }
});
Home.propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string
};
module.exports = Home;