export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Courses",
      image: "/images/Courses.png",
      link: "#services",
    },
    {
      id: 2,
      title: "Workshops",
      image: "/images/Workshops.png",
      link: "#services",
    },
    {
      id: 3,
      title: "Wealth Management",
      image: "/images/WealthManagement.png",
      link: "#services",
    },
  ];

  return (
    <div className="container-fluid services-section" id="services">
      <div className="container">
        <div className="row services-title-row">
          <div className="col-md-12 text-center">
            <h2 className="services-main-title">
              <a href="#services" className="course-link">
                Stock market courses
              </a>
            </h2>
            <h3 className="services-subtitle">
              Paving path towards financial freedom
            </h3>
          </div>
        </div>

        {/* First Row of Services */}
        <div className="row services-grid mt-5 d-flex flex-row flex-nowrap justify-content-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card-wrapper mx-3"
              style={{ minWidth: 300 }}
            >
              <div className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto 15px",
                  }}
                />
                <h5 className="service-title">{service.title}</h5>
                <a href={service.link} className="btn service-btn">
                  Join Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
