"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
          <h1 className="text-3xl font-bold text-black">Alpha5academy</h1>
          {/* Logo */}
          {/* <Link href="/" className="site-logo">
          {/*}  <img
              src="/images/logo.png"
              alt="livelong wealth logo"
              style={{ width: "auto", height: "50px" }}
            />
          </Link> */}

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
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    HOME
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about"
                    className={
                      pathname === "/about"
                        ? "underline decoration-[#f59e0b] underline-offset-4"
                        : ""
                    }
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#services">NEWS</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    id="servicesDropdown"
                    role="button"
                  >
                    SERVICES
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#workshops">
                        Workshops
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#wealth-management">
                        Wealth Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#estate-planning">
                        Estate Planning
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    id="coursesDropdown"
                    role="button"
                  >
                    COURSES
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="coursesDropdown"
                  >
                    <li className="dropdown-header">ONLINE COURSES</li>
                    <li>
                      <a className="dropdown-item" href="#online-basics">
                        Basics of Capital Markets (Complementary*)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#online-investment">
                        Investment and Portfolio Construction – Basics to
                        Advanced (Complementary*)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#online-advanced">
                        Advanced Techno-Funda Analysis Course
                      </a>
                    </li>
                    <li className="dropdown-divider" />
                    <li className="dropdown-header">OFFLINE COURSES</li>
                    <li>
                      <a className="dropdown-item" href="#offline-advanced">
                        Advanced TechnoFunda Analysis Course
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#offline-mentorship">
                        Mentorship Programs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#testimonials">GET IN TOUCH</a>
                </li>
                <li className="nav-item">
                  <a href="#testimonials">MARKET A-Z</a>
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
