var React = require("react");
import {Link} from "react-router";

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to={"/home"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/aboutus"}>About Us</Link>
                        </li>
                        <li>
                            <Link to={"/user"}>User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
module.exports = Header;
