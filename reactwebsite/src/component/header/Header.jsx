import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <>
            <div className = "header">
                <div className = "headerTitles">
                    <span className = "headerTitleSm">React & Node</span>
                    <span className = "headerTitleLg">Blog</span>
                </div>
                <img className = "headerImg" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="flowers" />
            </div>
        </>
    )
}

export default Header
