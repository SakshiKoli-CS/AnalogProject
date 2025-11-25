import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
    <div class="container">
      <header class="header">
        <h1>About Us</h1>
        <p class="subtitle">This page is statically generated at build time using SSG (Static Site Generation)</p>
      </header>

      <section class="content-section">
        <h2>Our Story</h2>
        <p>
          Welcome to our platform! We are a team of passionate developers and designers 
          dedicated to creating exceptional digital experiences. Our journey began with a 
          simple mission: to build fast, reliable, and user-friendly web applications that 
          make a difference.
        </p>
        <p>
          Over the years, we've grown from a small startup to a trusted partner for businesses 
          of all sizes. We believe in the power of modern web technologies and are committed 
          to staying at the forefront of innovation.
        </p>
      </section>

      <section class="content-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality web solutions that combine cutting-edge 
          technology with exceptional user experience. We strive to create applications 
          that are not only functional but also beautiful, accessible, and performant.
        </p>
      </section>

      <section class="content-section">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Innovation</h3>
            <p>We embrace new technologies and methodologies to deliver cutting-edge solutions.</p>
          </div>
          <div class="value-card">
            <h3>Quality</h3>
            <p>We maintain the highest standards in everything we build, ensuring reliability and excellence.</p>
          </div>
          <div class="value-card">
            <h3>Collaboration</h3>
            <p>We believe in working together with our clients and team members to achieve shared goals.</p>
          </div>
          <div class="value-card">
            <h3>Transparency</h3>
            <p>We communicate openly and honestly, building trust through clear and direct interactions.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Why Choose Us?</h2>
        <ul class="features-list">
          <li><strong>Expert Team:</strong> Our team consists of experienced developers and designers with years of expertise.</li>
          <li><strong>Modern Stack:</strong> We use the latest technologies and frameworks to build scalable applications.</li>
          <li><strong>Performance Focus:</strong> We optimize for speed and efficiency, ensuring fast load times and smooth experiences.</li>
          <li><strong>Responsive Design:</strong> All our applications are built with mobile-first, responsive design principles.</li>
          <li><strong>Ongoing Support:</strong> We provide continuous support and maintenance to keep your application running smoothly.</li>
        </ul>
      </section>

      <section class="info-section">
        <h2>SSG Information</h2>
        <div class="info-box">
          <p><strong>Rendering Mode:</strong> Static Site Generation (SSG)</p>
          <p><strong>Generated at:</strong> Build time</p>
          <p><strong>Benefits:</strong> Fast loading, SEO-friendly, reduced server load</p>
          <p><strong>Framework:</strong> Analog.js with SSG enabled</p>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .header {
        text-align: center;
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 2px solid #e0e0e0;
      }
      h1 {
        color: #dd0031;
        margin-bottom: 1rem;
        font-size: 3rem;
        font-weight: 700;
      }
      .subtitle {
        color: #666;
        font-size: 1.1rem;
        font-style: italic;
      }
      h2 {
        color: #333;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        font-size: 2rem;
        border-left: 4px solid #dd0031;
        padding-left: 1rem;
      }
      h3 {
        color: #555;
        margin-top: 1rem;
        margin-bottom: 0.75rem;
        font-size: 1.5rem;
      }
      .content-section {
        margin-bottom: 3rem;
      }
      p {
        line-height: 1.8;
        margin-bottom: 1.25rem;
        color: #444;
        font-size: 1.05rem;
      }
      .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      .value-card {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        border-top: 3px solid #dd0031;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .value-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .value-card h3 {
        color: #dd0031;
        margin-top: 0;
        font-size: 1.3rem;
      }
      .value-card p {
        margin-bottom: 0;
        font-size: 1rem;
      }
      .features-list {
        list-style: none;
        padding-left: 0;
        margin-top: 1.5rem;
      }
      .features-list li {
        padding: 1rem;
        margin-bottom: 1rem;
        background: #f5f5f5;
        border-left: 4px solid #4caf50;
        border-radius: 4px;
        line-height: 1.6;
      }
      .features-list li strong {
        color: #dd0031;
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }
      .info-section {
        background: #fff3e0;
        padding: 2rem;
        border-radius: 8px;
        border-left: 4px solid #dd0031;
        margin-top: 3rem;
      }
      .info-box {
        background: white;
        padding: 1.5rem;
        border-radius: 6px;
        margin-top: 1rem;
      }
      .info-box p {
        margin: 0.75rem 0;
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
      }
      .info-box p:last-child {
        border-bottom: none;
      }
      .info-box strong {
        color: #dd0031;
        display: inline-block;
        min-width: 150px;
      }
      @media (max-width: 768px) {
        .container {
          padding: 1rem;
        }
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        .values-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export default class AboutUsPage {}

