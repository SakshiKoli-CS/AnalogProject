import { Component } from '@angular/core';

@Component({
  selector: 'app-ssr',
  standalone: true,
  template: `
    <div class="container">
      <h1>Server-Side Rendering (SSR) Test Page</h1>
      <p>This page is rendered on the server and sent to the client as HTML.</p>
      
      <div class="info-section">
        <h2>SSR Information</h2>
        <ul>
          <li><strong>Rendered at:</strong> {{ renderTime }}</li>
          <li><strong>Rendering Mode:</strong> Server-Side Rendering</li>
          <li><strong>Page Type:</strong> SSR (rendered on each request)</li>
          <li><strong>Framework:</strong> Analog.js (SSR enabled by default)</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
      }
      h1 {
        color: #dd0031;
        margin-bottom: 1rem;
      }
      h2 {
        color: #333;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
      p {
        line-height: 1.6;
        margin-bottom: 1rem;
        color: #333;
      }
      .info-section,
      .features,
      .analog-info,
      .test-section {
        background: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 1.5rem;
      }
      .analog-info {
        background: #fff3e0;
        border-left: 4px solid #dd0031;
      }
      ul,
      ol {
        list-style-type: disc;
        padding-left: 1.5rem;
        line-height: 1.8;
      }
      ol {
        list-style-type: decimal;
      }
      li {
        margin-bottom: 0.5rem;
        color: #333;
      }
      strong {
        color: #dd0031;
      }
    `,
  ],
})
export default class SSRPage {
  renderTime = new Date().toLocaleString();
}

