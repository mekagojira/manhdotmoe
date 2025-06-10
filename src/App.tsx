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
          <div className="glass-card main-card">
            <div className="profile">
              <div className="avatar">👨‍💻</div>
              <h1 className="name">Manh Nguyen</h1>
              <p className="title">Full Stack Developer</p>
              <p className="description">
                Building software for a better world.
              </p>
            </div>

            <div className="buttons">
              <button className="btn primary">View Work</button>
              <button className="btn secondary">Get in Touch</button>
            </div>
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
