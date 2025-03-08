"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css"; // CSS Module for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target[0].value;
    window.location.href = `/search?pattern=${encodeURIComponent(searchInput)}`;
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={`${styles.logo} no-underline`}>
        <Image src="./basislogo.png" alt="BG Logo" width={40} height={40} />
        <span>
          The Mortals
          <br></br>
          &#40;Staff Website&#41;
        </span>
      </Link>
      <span className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </span>
      <nav id="nav" className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <a href="./" id={styles.home}>
              Home
            </a>
          </li>
          <li>
            <a href="./aboutus">About Us</a>
          </li>
          <li>
            <a href="./departments">Our Departments</a>
          </li>
          <li>
            <a href="./join">Join Us</a>
          </li>
          <li>
            <a href="./guidelines">Submission Guidelines</a>
          </li>
    
          <div className={styles.separator}></div>
          <li>
            <a href="https://www.mortalsmag.com/">Readers&apos; Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
