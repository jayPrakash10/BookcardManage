import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(<>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/get'>Getbooks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/add'>Addbooks</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;