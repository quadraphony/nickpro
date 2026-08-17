import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <header>
    <div class="logo">NickPro</div>
    <div class="nav-links">
      <a href="tel:+27621987570" class="contact-btn">Call +27 62 198 7570</a>
    </div>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h2>Tiling, Ceiling, Painting & Flooring</h2>
      <h1>NickPro <span class="renovate">Services</span></h1>
      <p>Tiling, ceiling, painting, and flooring services in Cape Town. Visit nickpro.co.za.</p>
      <a href="mailto:Nickmabhuku1988@gmail.com" class="contact-btn">Get a Free Quote</a>
    </div>
  </section>

  <section class="services">
    <div class="section-header">
      <h2>Our Services</h2>
      <p>Tiling, ceiling, painting, and flooring solutions for your home and business.</p>
    </div>
    <div class="grid">
      <div class="card">
        <h3>Our Services</h3>
        <ul>
          <li>Tiling</li>
          <li>Ceiling</li>
          <li>Painting</li>
          <li>Flooring</li>
        </ul>
      </div>
      <div class="card">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Free Quotes</li>
          <li>Professional Finish</li>
          <li>Affordable Pricing</li>
          <li>nickpro.co.za</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <h2>Ready to transform your home?</h2>
    <p>Contact us today for a free, no-obligation quote.</p>
    <a href="tel:+27621987570" class="btn-large">Call Now: +27 62 198 7570</a>
    <p style="margin-top: 1rem;">Email us: <a href="mailto:Nickmabhuku1988@gmail.com" style="text-decoration: underline;">Nickmabhuku1988@gmail.com</a></p>
  </section>

  <footer>
    <div class="footer-info">
      <p>&copy; 2024 NickPro services. All rights reserved.</p>
    </div>
    <div class="footer-tagline">
      <p>nickpro.co.za</p>
    </div>
  </footer>
`
