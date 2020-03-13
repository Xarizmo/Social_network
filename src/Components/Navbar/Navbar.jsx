import React from 'react';
import s from './Navbar.module.css'

const Nav = () => {
    return <nav className={s.nav}>
        <div><a href="google.com">Profile</a></div>
        <div><a href="google.com">Messages</a></div>
        <div><a href="google.com">News</a></div>
        <div><a href="google.com">Music</a></div>
        <div><a href="google.com">Settings</a></div>
    </nav>
}

export default Nav;