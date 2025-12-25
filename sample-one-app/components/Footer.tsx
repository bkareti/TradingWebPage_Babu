export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-gray-300 pt-[60px]">
      <div className="w-full bg-[#2c3e50]">
        <div className="max-w-[1140px] mx-auto px-4">
          {/* Footer Content */}
          <div className="flex flex-wrap gap-10 py-10 border-b border-[#445566] items-start">
            {/* Useful Links */}
            <div className="flex-1 min-w-[200px]">
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wide">
                Useful Links
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                <li>
                  <a
                    href="#privacy"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#shipping"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Term Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#disclosure"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Standard Disclosure
                  </a>
                </li>
                <li>
                  <a
                    href="#other"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Other Disclosure
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex-1 min-w-[200px]">
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wide">
                Company
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                <li>
                  <a
                    href="#about"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Our Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Work with us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Solutions */}
            <div className="flex-1 min-w-[200px]">
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wide">
                Our Solutions
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                <li>
                  <a
                    href="#services"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#app"
                    className="text-[#b0b8c0] no-underline text-[13px] transition-colors duration-300 hover:text-[#f59e0b]"
                  >
                    Our App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-[30px] text-center border-t border-[#445566]">
            <p className="text-[13px] text-[#8b95a5] mb-2.5">
              © Livelong Technologies Pvt.Ltd. All rights reserved.
            </p>
            <p className="text-[13px]">
              <a
                href="#privacy"
                className="text-[#8b95a5] no-underline transition-colors duration-300 mx-2 hover:text-[#f59e0b]"
              >
                Privacy
              </a>{" "}
              •{" "}
              <a
                href="#terms"
                className="text-[#8b95a5] no-underline transition-colors duration-300 mx-2 hover:text-[#f59e0b]"
              >
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
