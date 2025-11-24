import { Component } from '@angular/core';

@Component({
  selector: 'app-isr',
  standalone: true,
  template: `
    <div class="container">
      <h1>Incremental Static Regeneration (ISR) Test Page</h1>
      <p>This page uses ISR - it's statically generated but can be regenerated in the background.</p>
      
      <div class="info-section">
        <h2>ISR Information</h2>
        <ul>
          <li><strong>Rendered at:</strong> {{ renderTime }}</li>
          <li><strong>Rendering Mode:</strong> Incremental Static Regeneration</li>
          <li><strong>Page Type:</strong> ISR (statically generated with background revalidation)</li>
          <li><strong>Revalidation Time:</strong> 20 seconds</li>
          <li><strong>Framework:</strong> Analog.js with Nitro</li>
        </ul>
      </div>

      <div class="features">
        <h2>How ISR Works</h2>
        <ol>
          <li>Page is statically generated at build time</li>
          <li>Static page is served to users immediately</li>
          <li>After the revalidation period (20s), the next request triggers background regeneration</li>
          <li>New static page replaces the old one</li>
          <li>Users always get fast static pages, but content stays fresh</li>
        </ol>
      </div>

      <div class="analog-info">
        <h2>Analog.js ISR Configuration</h2>
        <p>ISR is configured in <code>vite.config.ts</code> using Nitro's <code>routeRules</code>:</p>
        <pre><code>'/isr': {{ '{' }}
  isr: 20, // Revalidate every 20 seconds
  headers: {{ '{' }}
    'Cache-Control': 'public, s-maxage=20, stale-while-revalidate=20',
  {{ '}' }},
{{ '}' }}</code></pre>
      </div>

      <div class="test-section">
        <h2>Testing ISR</h2>
        <p>To test ISR behavior:</p>
        <ol>
          <li>Build the application: <code>npm run build</code></li>
          <li>Start the preview server: <code>npm run preview</code></li>
          <li>Visit this page and note the render time</li>
          <li>Wait 20+ seconds and refresh the page</li>
          <li>The render time should update, showing the page was regenerated</li>
        </ol>
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
      code {
        background: #f0f0f0;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
      }
      pre {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        margin-top: 0.5rem;
      }
      pre code {
        background: transparent;
        padding: 0;
        color: inherit;
      }
    `,
  ],
})
export default class ISRPage {
  renderTime = new Date().toLocaleString();
}

