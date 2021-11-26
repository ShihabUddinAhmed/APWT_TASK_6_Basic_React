import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar navbar-top">
            <Link to="/"><button className="btn btn-info">Home</button></Link>
            <Link to="/contacts"><button className="btn btn-info">Contact</button></Link>
            <Link to="/student-list"><button className="btn btn-info">Student List</button></Link>
        </div>
    );
}

export default Navbar;