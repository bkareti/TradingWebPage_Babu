export default function LivelongWealthSection() {
  return (
    <section className="livelongwealth-section">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="livelongwealth-title">Livelong Wealth</h2>
              <p className="livelongwealth-subtitle">
                Empowering financial freedom through expert-led training and
                strategic wealth management
              </p>
            </div>
          </div>

          <div
            className="row stats-container"
            style={{ marginTop: "40px", textAlign: "center" }}
          >
            <div className="col-lg-4 col-md-4 col-12 stat-box-item">
              <div className="stat-item-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
            4
            <div className="col-lg-4 col-md-4 col-12 stat-box-item">
              <div className="stat-item-card">
                <div className="stat-number">5K+</div>
                <div className="stat-label">Trained Students</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 stat-box-item">
              <div className="stat-item-card">
                <div className="stat-number">2K+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
