"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <section className="topbar">
        Follow us on
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="anchorcss"
        >
          {" "}
          Instagram
        </a>{" "}
        for new updates!
      </section>

      {/* Header */}
      <header className="site-header">
        <div className="header-wrapper">
          {/* Logo */}
          <Link href="/" className="site-logo">
            <img
              src="/images/logo.png"
              alt="livelong wealth logo"
              style={{ width: "auto", height: "50px" }}
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-toggler ${isOpen ? "active" : ""}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <div id="nav-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Navigation */}
          <nav className={`navbar ${isOpen ? "show" : ""}`}>
            <div
              className={`navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link href="/">Home</Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    id="aboutDropdown"
                    role="button"
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                    <li>
                      <a className="dropdown-item" href="#about">
                        About Us
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    id="servicesDropdown"
                    role="button"
                  >
                    Our Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#services">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#services">
                        Wealth Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#services">
                        Workshops
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#services">
                        Mutual Fund
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#services">
                        Placements
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#services">
                        Tools
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#services">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#services">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#services">Our App</a>
                </li>

                <li className="nav-item">
                  <a
                    href="https://livelongwealth.in/livelongwealth/home/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary-btn"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
