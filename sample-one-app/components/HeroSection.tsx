import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container-fluid hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12 content-box text-center">
            <h1 className="hero-title">Experience Financial Freedom</h1>
            <h3 className="hero-subtitle">
              Wealth Management | Courses | Workshops
            </h3>

            <div className="row">
              <div className="col-md-12">
                <a href="#services" className="btn secondaray-btn mt-4">
                  Join Us
                </a>
              </div>
            </div>

            <div className="col-md-12 content-box">
              <div className="for-desktop">
                <Image
                  src="/images/homepage-hero-pic.png"
                  alt="home page hero image"
                  width={1200}
                  height={400}
                  className="for-desktop img-fluid mt-5"
                  priority
                />
              </div>
              {/* <div className="mobile-img">
                <Image
                  src="/images/responsive-mobile.png"
                  alt="llw-responsive"
                  width={800}
                  height={400}
                  className="for-mobile img-fluid mt-5"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
