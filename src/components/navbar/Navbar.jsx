import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Change background on scroll
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.Navbar} ${scrolling ? styles.Scrolled : ""}`}>
      <Link to= "/" className={styles.Logo}>Sneha.!!</Link>
      
      {/* Hamburger Menu Button */}
      <div className={styles.Hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`${styles.NavLinks} ${menuOpen ? styles.MobileOpen : ""}`}>
        <Link to="/" className={location.pathname === "/" ? styles.active : ""} onClick={closeMenu}>Home</Link>
        <Link to="/about-us" className={location.pathname === "/about-us" ? styles.active : ""} onClick={closeMenu}>About-Us</Link>
        {/* <Link to="/solution" className={location.pathname === "/solution" ? styles.active : ""} onClick={closeMenu}>Solution</Link> */}
        <Link to="/service" className={location.pathname === "/service" ? styles.active : ""} onClick={closeMenu}>Service</Link>
        <Link to="/career" className={location.pathname === "/career" ? styles.active : ""} onClick={closeMenu}>Career</Link>
        <Link to="/us-health-care" className={location.pathname === "/us-health-care" ? styles.active : ""} onClick={closeMenu}>US-Health-Care</Link>
        {/* <Link to="/admin" className={location.pathname === "/admin" ? styles.active : ""} onClick={closeMenu}>Admin Login</Link> */}
        <Link to="/admin " className={styles.Button} onClick={closeMenu}>Contact Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;
