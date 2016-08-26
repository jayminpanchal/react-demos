var React = require("react");
var Header = require("./Header");

var Root = React.createClass({
    render: function () {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
});
module.exports = Root;