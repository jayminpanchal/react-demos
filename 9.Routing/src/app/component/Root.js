var React = require("react");
var Header = require("./component/Header");

var Home = React.createClass({
    render: function () {
        return (
            <section className="content">
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
module.exports = Home;