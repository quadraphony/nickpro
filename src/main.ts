import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <header>
    <div class="logo">EDSON Home Maintenance</div>
    <div class="nav-links">
      <a href="tel:+27624723536" class="contact-btn">Call +27 62 472 3536</a>
    </div>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h2>Professional Painters in Cape Town</h2>
      <h1>Build & <span class="renovate">RENOVATE</span></h1>
      <p>Transforming your space with quality craftsmanship. We are the best in Cape Town for painting, roofing, and general maintenance.</p>
      <a href="mailto:edsonjirry43@gmail.com" class="contact-btn">Get a Free Quote</a>
    </div>
  </section>

  <section class="services">
    <div class="section-header">
      <h2>Our Services</h2>
      <p>Comprehensive maintenance solutions for your home and business.</p>
    </div>
    <div class="grid">
      <div class="card">
        <h3>Professional Painting</h3>
        <ul>
          <li>Houses</li>
          <li>Pavements</li>
          <li>Waterproofing</li>
          <li>Cupboard Painting</li>
          <li>Steel Painting</li>
          <li>Roof Painting</li>
        </ul>
      </div>
      <div class="card">
        <h3>Cleaning & Care</h3>
        <ul>
          <li>Gutter Cleaning</li>
          <li>Roof Cleaning</li>
          <li>Window Cleaning</li>
          <li>Varnishing Decker</li>
        </ul>
      </div>
      <div class="card">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Free Quotes</li>
          <li>Professional Finish</li>
          <li>Affordable Pricing</li>
          <li>Best in Cape Town</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <h2>Ready to transform your home?</h2>
    <p>Contact us today for a free, no-obligation quote.</p>
    <a href="tel:+27624723536" class="btn-large">Call Now: +27 62 472 3536</a>
    <p style="margin-top: 1rem;">Email us: <a href="mailto:edsonjirry43@gmail.com" style="text-decoration: underline;">edsonjirry43@gmail.com</a></p>
  </section>

  <footer>
    <div class="footer-info">
      <p>&copy; 2024 EDSON Home maintenance services. All rights reserved.</p>
    </div>
    <div class="footer-tagline">
      <p>The best in Capetown</p>
    </div>
  </footer>
`
