import React from 'react';
import logo from './notalone.png'
import titlepic from './titlepic.PNG'

console.log(logo);
console.log(titlepic);

const Header = () => (
    <div className="header" align = "center">
        <div className = "title" align = "center">
            <img width = "35%" src={titlepic} alt="you are not alone."/>
        </div>
        <div className="logo" align = "center">
            <img width = "12%" src={logo} alt="Logo" />
        </div>
    </div>
);

export default Header;
