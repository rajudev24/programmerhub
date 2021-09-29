import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='title'>
                    <h3>Engineer Hub</h3>
                </div>
                <div className='menu-list'>
                    <ul><a href="./home">Home</a>
                        <a href="Employee">Employee</a>
                        <a href="about">About us</a>
                        <a href="contact">Contact</a>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Header;