import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Background */}
      <div className="background"></div>

      {/* Main Content */}
      <div className="container">
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-brand">manh.moe</div>
          <div className="nav-links">
            <a href="https://blog.manh.moe" target="_blank">
              Blog
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="greeting">👋 Hello, I'm</div>
              <h1 className="hero-name">Manh Nguyen</h1>
              <div className="hero-title">
                <span className="title-highlight">Software Engineer</span>
                <span className="title-subtitle">& Open Source Advocate</span>
              </div>
              <p className="hero-description">
                Building scalable systems that handle millions of users while
                championing free software and digital rights. Passionate about
                creating technology that empowers people.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Users Served</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="avatar-container">
                <div className="avatar-bg"></div>
                <div className="avatar">👨‍💻</div>
                <div className="avatar-ring"></div>
              </div>
              <div className="floating-elements">
                <div className="float-item">⚡</div>
                <div className="float-item">🚀</div>
                <div className="float-item">💡</div>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn primary large">
              <span>View My Work</span>
              <span className="btn-icon">→</span>
            </button>
            <button className="btn secondary large">
              <span>Let's Connect</span>
              <span className="btn-icon">💬</span>
            </button>
          </div>
        </section>

        {/* Glass Input Section */}
        <section className="input-section">
          <div className="glass-input-container">
            <div className="input-icon">💬</div>
            <input
              type="text"
              placeholder="Send me a message..."
              className="glass-input"
            />
            <button className="input-btn">Send</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
