var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./ccomponent/Header");
var Home = require("./ccomponent/Home");

var App = React.createClass({
        render: function () {
            let user = {
                name: "ABC",
                mobile: "1234567890",
                email: "abc@gmail.com",
                hobbies: ["Sports", "Reading", "Coding"]
            };
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Header/>
                            {/*It is a basic Data Passing*/}
                            <Home title={"Home Page"} description={"It is a home page."} user={user}>
                                <p>This is the data passed in a body of Home Tag</p>
                            </Home>
                        </div>
                    </div>
                </div>
            );
        }
    })
    ;

ReactDOM.render(<App/>, document.getElementById("app"));