var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./component/Header");
var Home = require("./component/Home");

var App = React.createClass({
    getInitialState: function () {
        return {
            homeLink: "Home"
        };
    },
    sayHello: function () {
        alert("Parent Called");
    },
    changeLinkName: function (newLinkName) {
        this.setState({
            homeLink: newLinkName
        });
    },
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header homeLink={this.state.homeLink}/>
                        <Home title={"Home Page"} description={"It is a home page."}
                              sayHello={this.sayHello}
                              changeLink={this.changeLinkName.bind(this)}
                              initialLinkName={this.state.homeLink}>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));