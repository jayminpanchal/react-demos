var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./component/Header");
var Home = require("./component/Home");

var App = React.createClass({
    getInitialState: function () {
        return {
            homeMounted: true
        };
    },
    onChangeHomeMounted: function () {
        this.setState({
            homeMounted: false
        });
    },
    render: function () {
        let homeComponent = '';
        if (this.state.homeMounted) {
            homeComponent = <Home title={"Home Page"} description={"It is a home page."}> </Home>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                        {homeComponent}
                        <button className="btn btn-danger" onClick={this.onChangeHomeMounted.bind(this)}>
                            (Un)Mount Home Component
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById("app"));