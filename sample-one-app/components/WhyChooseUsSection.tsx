export default function WhyChooseUsSection() {
  const features = [
    {
      id: 1,
      title: "Strategies",
      description:
        "Understandable and implementable strategies across: Equities | future & options | commodities.",
      image: "/images/Strategies.png",
    },
    {
      id: 2,
      title: "Risk Reward",
      description:
        "Our commitment to disciplined trading aims to reduce your risk exposure while maximizing revenue potential.",
      image: "/images/RiskReward.png",
    },
    {
      id: 3,
      title: "Trading Concepts",
      description:
        "Master the art of utilizing diverse price action setups across markets in live trading, ensuring precision. Identify correct entry and exit points.",
      image: "/images/TradingConcepts.png",
    },
    {
      id: 4,
      title: "Live Trading",
      description:
        "We conduct Live Trade & follow up sessions and hold discussions about trades so that you can gain edge over other retail traders.",
      image: "/images/LiveTrading.png",
    },
    {
      id: 5,
      title: "Expert Support",
      description:
        "Connect with our team for doubt clarification, with nationwide centers available for convenient visits and query resolution.",
      image: "/images/ExpertSupport.png",
    },
    {
      id: 6,
      title: "Smart Trading",
      description:
        "Learn creating Algorithmic trading strategies and get Specialized Wealth Management Solutions.",
      image: "/images/SmartTrading.png",
    },
  ];

  return (
    <div className="container-fluid why-choose-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h2 className="why-choose-title">Why choose us?</h2>
          </div>
        </div>

        <div
          className="features-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-wrapper"
              style={{
                flex: "0 0 calc(33.333% - 1.35rem)",
                minWidth: "280px",
                maxWidth: "350px",
              }}
            >
              <div
                className="feature-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    marginBottom: "20px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "120px",
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width="200"
                    height="200"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
                <h4 className="feature-title" style={{ marginBottom: "10px" }}>
                  {feature.title}
                </h4>
                <p
                  className="feature-description"
                  style={{ fontSize: "14px", lineHeight: "1.6" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Address Section */}
        <div className="row contact-section mt-5 pt-5">
          <div className="col-md-12">
            <div className="contact-content">
              <h3 className="contact-title">Get In Touch</h3>

              <div className="addresses-container">
                <div className="address-item">
                  <h5>Kerala Address</h5>
                  <p>
                    Sreesailam, Door No XIV/490, Udayanapuram p.o, Vaikom,
                    Kottayam, Kerala, India, 686143
                  </p>
                </div>

                <div className="address-item">
                  <h5>Kochi Address</h5>
                  <p>
                    L8, Q1 Mall by Nippon Q1 Chakkalakkal, Service Rd East, NH
                    66, Palarivattom, Vennala, Kochi, Kerala 682028
                  </p>
                </div>

                <div className="address-item">
                  <h5>Bengaluru Address</h5>
                  <p>
                    Ground floor, Ajmera Nucleus, Electronic City Phase-2
                    Bengaluru, Karnataka - 560100
                  </p>
                </div>

                <div className="address-item">
                  <h5>Delhi Address</h5>
                  <p>
                    806, 807 - 8th Floor, Tower A, Nextra, District Centre,
                    Mayur Vihar Phase 1 Extension, New Delhi-9, 110091
                  </p>
                </div>

                <div className="address-item">
                  <h5>Pala Address</h5>
                  <p>
                    2nd Floor Puthumana Tower, Riverview Rd, Pala, Kerala 686575
                  </p>
                </div>
              </div>

              <div className="contact-details mt-4">
                <p className="email">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@livelongwealth.com">
                    support@livelongwealth.com
                  </a>
                </p>

                <p className="phone">
                  <strong>Phone:</strong>
                </p>
                <ul className="phone-list">
                  <li>
                    <a href="tel:+917996655547">English: +91 7996655547</a>
                  </li>
                  <li>
                    <a href="tel:+918970011683">Malayalam: +91 8970011683</a>
                  </li>
                </ul>
              </div>

              {/* Social Media Icons */}
              <div className="social-icons mt-4">
                <a href="#" title="Twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" title="LinkedIn" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" title="Facebook" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" title="Instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
