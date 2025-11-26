export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid footer-bg">
        <div className="container">
          <div className="row footer-content">
            <div className="grid grid-cols-3 gap-3">
              {/* Useful Links */}
              <div className="col-lg-4 col-md-4 col-12 footer-section">
                <h4 className="footer-title">Useful Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#shipping">Shipping Policy</a>
                  </li>
                  <li>
                    <a href="#terms">Term Condition</a>
                  </li>
                  <li>
                    <a href="#disclosure">Standard Disclosure</a>
                  </li>
                  <li>
                    <a href="#other">Other Disclosure</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {/* Company */}
              <div className="col-lg-4 col-md-4 col-12 footer-section">
                <h4 className="footer-title">Company</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#blog">Our Blog</a>
                  </li>
                  <li>
                    <a href="#careers">Work with us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {/* Our Solutions */}
              <div className="col-lg-4 col-md-4 col-12 footer-section">
                <h4 className="footer-title">Our Solutions</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#services">Our Services</a>
                  </li>
                  <li>
                    <a href="#app">Our App</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row footer-bottom">
            <div className="col-md-12">
              <p className="footer-copyright">
                © Livelong Technologies Pvt.Ltd. All rights reserved.
              </p>
              <p className="footer-links-bottom">
                <a href="#privacy">Privacy</a> •{" "}
                <a href="#terms">Terms & Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
