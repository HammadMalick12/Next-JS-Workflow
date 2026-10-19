
export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="/" className="logo">
          Nova<span>Web</span>
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="header-button">
          Get Started
        </a>
      </header>

      {/* Main Body */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO NOVAWEB</p>

            <h1>
              Build something
              <br />
              <span>extraordinary.</span>
            </h1>

            <p className="hero-text">
              We create modern digital experiences that help
              businesses grow, connect, and stand out online.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-button">
                Explore Services →
              </a>
              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>50+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>Happy Clients</span>
              </div>
              <div>
                <strong>5★</strong>
                <span>Our Goal</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <span className="status-dot"></span>
              Your next big idea
            </div>
            <div className="visual">
              <div className="visual-circle">N</div>
              <div className="visual-line"></div>
              <div className="visual-line short"></div>
              <div className="visual-blocks">
                <div>Design</div>
                <div>Develop</div>
                <div>Launch</div>
              </div>
            </div>
            <p className="card-caption">
              From concept to creation.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="services" id="services">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Everything you need to grow</h2>
            <p>
              Practical digital solutions built around your goals.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">✦</div>
              <h3>Web Design</h3>
              <p>
                Clean, modern designs that look great on every screen.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">⌘</div>
              <h3>Development</h3>
              <p>
                Fast, reliable websites built with modern technology.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">↗</div>
              <h3>Growth Strategy</h3>
              <p>
                Digital experiences designed to support your business.
              </p>
            </article>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about">
          <p className="eyebrow">WHY NOVAWEB</p>
          <h2>Simple ideas. Powerful results.</h2>
          <p>
            We combine thoughtful design, useful technology, and
            clear communication to turn ideas into digital products.
          </p>
          <a href="#contact" className="primary-button">
            Let&apos;s Talk →
          </a>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <h2>Have a project in mind?</h2>
          <p>Let&apos;s discuss how we can bring your idea to life.</p>
          <a href="mailto:hello@example.com" className="primary-button">
            Email Us →
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="/" className="logo">
          Nova<span>Web</span>
        </a>
        <p>© 2026 NovaWeb. All rights reserved.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}
