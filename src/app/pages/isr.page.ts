import { Component } from '@angular/core';

@Component({
  selector: 'app-isr',
  standalone: true,
  template: `
    <section 
      class="page-container"
    >
      <h1>🌐 ISR Demo Page</h1>
      <p class="description">
        This page is <strong>regenerated on the server</strong> every 40 seconds.
      </p>

      <div class="info-card">
        <h2>📅 Page Info</h2>
        <ul class="info-list">
          <li>
            <strong>🕒 Generated at:</strong><br /> {{ generatedAt }}
          </li>
          <li>
            <strong>🔄 Next Refresh:</strong><br />
            <code>40 seconds</code>
          </li>
        </ul>
      </div>

      <p class="back-link">
        <a href="/">← Back to Home</a>
      </p>
    </section>
  `,
  styles: [
    `
      .page-container {
        padding: 3rem 2rem;
        font-family: system-ui, sans-serif;
        max-width: 800px;
        margin: auto;
        text-align: center;
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      .description {
        color: #277ef0;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }

      .info-card {
        background: linear-gradient(135deg, #34d399, #3b82f6, #8b5cf6);
        padding: 2rem;
        border-radius: 16px;
        color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .info-card h2 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }

      .info-list {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 1.1rem;
      }

      .info-list li {
        margin-bottom: 0.75rem;
      }

      .info-list code {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.2rem 0.4rem;
        border-radius: 6px;
      }

      .back-link {
        margin-top: 2rem;
      }

      .back-link a {
        color: #fbbf24;
        text-decoration: none;
        font-weight: 600;
      }

      .back-link a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export default class ISRPage {
  generatedAt = new Date().toLocaleTimeString();
}

