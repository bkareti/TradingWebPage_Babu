export default function WelcomeSection() {
  return (
    <div className="container-fluid welcome-section">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4">
              <h3 className="welcome-small-title">Welcome to</h3>
              <h2 className="welcome-title">Livelong Wealth</h2>

              <p className="welcome-text">
                Step into a world of prosperity with Livelong Wealth, where your
                financial journey begins.
              </p>

              <p className="welcome-text">
                Get tailored Wealth Management, Diversified Smallcase
                Portfolios, learn Algorithmic Trading strategies, and explore{" "}
                <span className="highlight-course">Stock market courses</span>
              </p>

              <p className="sebi-text">
                SEBI Registered RA with 10+years of experience
              </p>

              <p className="welcome-description">
                As a leading stock market institute, Live Long Wealth is
                committed to equipping individuals with the knowledge and skills
                required to navigate the ever-evolving financial markets. Our
                expert-designed courses cover everything from fundamental
                analysis to advanced trading strategies, ensuring a well-rounded
                learning experience.
              </p>

              <p className="welcome-description">
                Whether you are a beginner looking to understand the stock
                market or an experienced trader aiming to refine your
                strategies, our stock trading institute offers comprehensive
                training programs tailored to your needs. Gain hands-on
                experience and expert guidance to build a strong foundation for
                long-term success in trading and investments.
              </p>

              <div className="align-middle align-center">
                <a href="#services" className="btn secondaray-btn mt-4">
                  Join Us
                </a>
              </div>
            </div>
            <div>Image</div>
          </div>
        </div>
      </div>
    </div>
  );
}
