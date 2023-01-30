import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='nav-bar d-flex align-items-center justify-content-around p-3 bg-dark text-light'>
            <div className="logo">
                <h3>Company Name</h3>
            </div>
            <div className="header-list">
                <Link to='/'>Home</Link>
                
                <Link to='/shopping'>Shopping</Link>
                <Link to='/orderreview'>Order Review</Link>

            </div>

        </div>
    );
};

export default Header;