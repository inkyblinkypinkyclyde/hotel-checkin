import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/guest">Guest</Link>
            </li>
            <li>
                <Link to="/manager">Manager</Link>
            </li>
        </ul>
    )
}

export default Navigation;