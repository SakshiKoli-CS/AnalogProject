import { Component } from '@angular/core';

@Component({
  selector: 'app-isr',
  standalone: true,
  template: `
    <section class="page-container">
      <h1>📦 Cache Purge Demo</h1>
      <p class="description">
        This page demonstrates <strong>Cache Purge</strong> using CacheTags's.
      </p>

      <div class="info-card">
        <h2>Server Data</h2>
        <ul class="info-list">
          <li><strong>⏰ Current server time:</strong> {{ currentTime }}</li>
          <li><strong>🎲 Random number:</strong> {{ randomNumber }}</li>
          <li><strong>🏷️ Cache Tag:</strong> cachetest</li>
          <li><strong>🔄 Page Refresh:</strong> 60sec</li>
        </ul>
      </div>

      <p class="back-link">
        <a href="/">← Back Home</a>
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
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        text-align: center;
      }

      .description {
        text-align: center;
        color: #555;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }

      .info-card {
        background: #f0f8ff;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
      }

      .info-card h2 {
        margin-bottom: 1rem;
        color: #1e40af;
      }

      .info-list {
        list-style: none;
        padding: 0;
        line-height: 1.8;
        font-size: 1.05rem;
      }

      .info-list li {
        margin-bottom: 0.5rem;
      }

      .back-link {
        text-align: center;
        margin-top: 1rem;
      }

      .back-link a {
        color: #2563eb;
        font-weight: 600;
        text-decoration: none;
      }

      .back-link a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export default class ISRPage {
  currentTime = new Date().toLocaleString();
  randomNumber = Math.floor(Math.random() * 1000);
}

