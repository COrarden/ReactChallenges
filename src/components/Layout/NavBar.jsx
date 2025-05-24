import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav className={styles.navbar}>
            <Link to = "/" className={styles.logo}>Blog Application</Link>
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </div>
                <button
                className={styles.hamburger}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                >
                {isMobileMenuOpen ? (
                    <span className={styles.closeIcon}>X</span>
                ) : (
                    <span className={styles.menuIcon}>☰</span>
                )}
                </button>
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <Link to="/" onClick={toggleMobileMenu}>Home</Link>
                        <Link to="/blog" onClick={toggleMobileMenu}>About</Link>
                        <Link to="/about" onClick={toggleMobileMenu}>Contact</Link>
                    </div>
                )}

        </nav>
        );
};


export default NavBar;
// This code defines a responsive navigation bar using React and CSS modules.