var React = require("react");

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}
module.exports = Header;
