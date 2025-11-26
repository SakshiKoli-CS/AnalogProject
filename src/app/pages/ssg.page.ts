import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container">
      <h1>About Page</h1>
      <p>This is a static page generated at build time using SSG (Static Site Generation).</p>
      <p>This page was pre-rendered and will be served as static HTML.</p>
      <div class="image-container">
        <img src="/cake-129.jpg" alt="Chocolate cake dessert" class="cake-image" />
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
      p {
        line-height: 1.6;
        margin-bottom: 1rem;
        color: #333;
      }
      .image-container {
        margin-top: 2rem;
        text-align: center;
      }
      .cake-image {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export default class AboutPage {}

