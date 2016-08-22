var React = require("react");

var Home = React.createClass({
    onChangeLinkName: function () {
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
module.exports = Home;