var React = require("react");

var Home = React.createClass({
    getInitialState: function () {
        return {
            homeLink: "Link Updated"
        };
    },
    onChangeLinkName: function () {
        console.log("child click");
        this.props.changeLink(this.state.homeLink)
    },
    render: function () {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <h2>{this.props.title} </h2>
                        <hr/>
                        <p>{this.props.description} </p>
                        <button className="btn btn-info" onClick={this.props.sayHello}>
                            Call Parent function
                        </button>
                        <button className="btn btn-danger" onClick={this.onChangeLinkName.bind(this)}>Change Link
                        </button>
                    </div>
                </div>
            </section>
        );
    }
});
Home.propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    sayHello: React.PropTypes.func,
    changeLink: React.PropTypes.func
};
module.exports = Home;