import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="onavbar">
            <ul className="elements">
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/compose">Compose</Link></li>
                <li className="item"><Link to="/post">Post</Link></li>
                <li className="item"><Link to="/about">About Us</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
